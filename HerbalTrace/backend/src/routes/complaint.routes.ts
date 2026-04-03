import { Router, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { authenticate } from '../middleware/auth';
import { db } from '../config/database';
import { logger } from '../utils/logger';

const router = Router();

/**
 * @route   POST /api/v1/complaints
 * @desc    Submit a complaint
 * @access  Private
 */
router.post('/', authenticate, async (req: Request, res: Response) => {
  try {
    const authUser = (req as any).user;
    const {
      userId,
      userName,
      userEmail,
      complaintType,
      subject,
      description,
      status,
      timestamp,
    } = req.body;

    if (!complaintType || !subject || !description) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: complaintType, subject, description',
      });
    }

    const complaintId = `CMP-${Date.now()}-${uuidv4().split('-')[0]}`;
    const resolvedUserId = authUser?.userId || userId;
    const resolvedUserName = authUser?.fullName || userName || authUser?.name;
    const resolvedUserEmail = authUser?.email || userEmail;

    if (!resolvedUserId) {
      return res.status(400).json({
        success: false,
        message: 'Unable to resolve authenticated user for complaint',
      });
    }

    db.prepare(`
      INSERT INTO complaints (
        id, user_id, user_name, user_email,
        complaint_type, subject, description, status,
        created_at, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      complaintId,
      resolvedUserId,
      resolvedUserName || null,
      resolvedUserEmail || null,
      complaintType,
      subject,
      description,
      status || 'pending',
      timestamp || new Date().toISOString(),
      new Date().toISOString(),
    );

    return res.status(201).json({
      success: true,
      message: 'Complaint submitted successfully',
      complaintId,
      data: {
        id: complaintId,
        userId: resolvedUserId,
        complaintType,
        subject,
        description,
        status: status || 'pending',
      },
    });
  } catch (error: any) {
    logger.error('Error creating complaint:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit complaint',
      error: error.message,
    });
  }
});

/**
 * @route   GET /api/v1/complaints/user/:userId
 * @desc    Get complaints for a specific user (owner/admin only)
 * @access  Private
 */
router.get('/user/:userId', authenticate, async (req: Request, res: Response) => {
  try {
    const authUser = (req as any).user;
    const { userId } = req.params;

    if (authUser?.role !== 'Admin' && authUser?.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view these complaints',
      });
    }

    const complaints = db.prepare(`
      SELECT id, user_id as userId, user_name as userName, user_email as userEmail,
             complaint_type as complaintType, subject, description, status,
             admin_notes as adminNotes, created_at as createdAt, updated_at as updatedAt,
             resolved_at as resolvedAt, resolved_by as resolvedBy
      FROM complaints
      WHERE user_id = ?
      ORDER BY created_at DESC
    `).all(userId);

    return res.status(200).json({
      success: true,
      complaints,
      count: complaints.length,
    });
  } catch (error: any) {
    logger.error('Error fetching complaints:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch complaints',
      error: error.message,
    });
  }
});

export default router;

import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Settings, 
  Users, 
  FilePieChart, 
  ShieldAlert,
  Activity,
  Server,
  Database,
  Network,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  Globe,
  Shield,
  Code,
  BarChart3,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  X,
  Download,
  RefreshCw,
  Cpu,
  HardDrive,
  Wifi,
  Battery,
  Leaf,
  Tractor,
  Beaker,
  Factory,
  Target,
  Award,
  Calendar,
  Monitor,
  Link,
  GitBranch,
  Key,
  UserCheck,
  MessageCircle,
  Send
} from 'lucide-react'
import DashboardNavbar from '../common/DashboardNavbar'

const AdminLandingPage = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedNode, setSelectedNode] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)

  const greeting = useMemo(() => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }, [])

  const systemStats = [
    { id: 1, title: 'Active Nodes', value: '0', change: '0', trend: 'up', icon: Server, color: 'blue' },
    { id: 2, title: 'Transactions/sec', value: '0', change: '0%', trend: 'up', icon: Zap, color: 'green' },
    { id: 3, title: 'System Uptime', value: '0%', change: '0%', trend: 'up', icon: Activity, color: 'purple' },
    { id: 4, title: 'Storage Used', value: '0TB', change: '0GB', trend: 'up', icon: Database, color: 'orange' }
  ]

  const networkNodes = [
    {
      id: 'NODE-001',
      name: 'Validator Primary',
      type: 'Validator',
      status: 'Online',
      uptime: '99.9%',
      version: 'v2.5.1',
      location: 'Mumbai, India',
      cpu: '45%',
      memory: '67%',
      network: '125 MB/s',
      lastSync: '2025-12-02 14:30:25'
    },
    {
      id: 'NODE-002',
      name: 'Observer Node 1',
      type: 'Observer',
      status: 'Syncing',
      uptime: '98.5%',
      version: 'v2.5.0',
      location: 'Delhi, India',
      cpu: '78%',
      memory: '82%',
      network: '89 MB/s',
      lastSync: '2025-12-02 14:25:10'
    },
    {
      id: 'NODE-003',
      name: 'API Gateway',
      type: 'API',
      status: 'Online',
      uptime: '99.7%',
      version: 'v2.5.1',
      location: 'Bangalore, India',
      cpu: '32%',
      memory: '54%',
      network: '245 MB/s',
      lastSync: '2025-12-02 14:30:20'
    }
  ]

  const userRoles = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@herbaltrace.com',
      role: 'Farmer',
      permissions: ['batch_create', 'batch_update'],
      status: 'Active',
      lastLogin: '2025-12-02 09:15',
      location: 'Maharashtra'
    },
    {
      id: 2,
      name: 'Dr. Meera Singh',
      email: 'meera@herbaltrace.com',
      role: 'Lab Technician',
      permissions: ['test_upload', 'certificate_issue', 'batch_approve'],
      status: 'Active',
      lastLogin: '2025-12-02 11:30',
      location: 'Karnataka'
    },
    {
      id: 3,
      name: 'Anita Iyer',
      email: 'anita@herbaltrace.com',
      role: 'Manufacturer',
      permissions: ['process_create', 'qr_generate', 'inventory_manage'],
      status: 'Active',
      lastLogin: '2025-12-01 16:45',
      location: 'Tamil Nadu'
    }
  ]

  const sustainabilityKPIs = [
    { metric: 'Carbon Footprint Reduction', value: '23%', target: '25%', progress: 92, icon: Leaf },
    { metric: 'Farmer Income Increase', value: '18%', target: '20%', progress: 90, icon: Tractor },
    { metric: 'Lab Processing Efficiency', value: '96.2%', target: '95%', progress: 101, icon: Beaker },
    { metric: 'Manufacturing Efficiency', value: '94.8%', target: '93%', progress: 102, icon: Factory }
  ]

  const smartContracts = [
    {
      name: 'HerbalTraceCore',
      version: 'v2.5.1',
      deployedAt: '0x742...a8f3',
      status: 'Active',
      transactions: '12,847',
      gasUsed: '2.3M'
    },
    {
      name: 'QualityTest',
      version: 'v1.8.2',
      deployedAt: '0x9d4...c2e1',
      status: 'Active',
      transactions: '8,293',
      gasUsed: '1.7M'
    },
    {
      name: 'ProcessingStep',
      version: 'v1.6.0',
      deployedAt: '0x1a5...f9b2',
      status: 'Pending Update',
      transactions: '5,749',
      gasUsed: '1.2M'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Navbar */}
      <DashboardNavbar 
        userName="Priya Desai" 
        userRole="Admin"
        dateJoined="1 August 2023"
        approvedBy="System Administrator"
      />

      {/* Header/Greeting Section */}
      <div className="pt-20 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-primary-100 text-sm md:text-base mb-1">Welcome back</p>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{greeting}, Priya Desai</h1>
                <p className="text-primary-100 text-sm md:text-base mt-2">Network Administrator - Herbal Trace Initiative</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-700 px-5 py-2.5 rounded-xl font-semibold flex items-center space-x-2 hover:bg-primary-50 transition-colors text-sm md:text-base shadow-md"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Node</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* System Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: stat.id * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                  <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1 bg-gray-100 rounded-xl p-1 mb-8 overflow-x-auto">
          {[
            { id: 'overview', label: 'System Overview', icon: BarChart3 },
            { id: 'nodes', label: 'Network Nodes', icon: Server },
            { id: 'users', label: 'User Management', icon: Users },
            { id: 'complaints', label: 'Complaints', icon: MessageCircle },
            { id: 'contracts', label: 'Smart Contracts', icon: Code },
            { id: 'integrations', label: 'Integrations', icon: Link },
            { id: 'sustainability', label: 'Sustainability KPIs', icon: Leaf }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm md:text-base ${
                activeTab === tab.id
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              <SystemHealthOverview />
              <TransactionThroughput />
              <RecentActivities />
            </motion.div>
          )}

          {activeTab === 'nodes' && (
            <motion.div
              key="nodes"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <NetworkNodeManagement nodes={networkNodes} onSelectNode={setSelectedNode} />
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              key="users"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <UserRoleManagement users={userRoles} onSelectUser={setSelectedUser} />
            </motion.div>
          )}

          {activeTab === 'complaints' && (
            <motion.div
              key="complaints"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <ComplaintsManagement />
            </motion.div>
          )}

          {activeTab === 'contracts' && (
            <motion.div
              key="contracts"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <SmartContractManagement contracts={smartContracts} />
            </motion.div>
          )}

          {activeTab === 'integrations' && (
            <motion.div
              key="integrations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <IntegrationControlPanel />
            </motion.div>
          )}

          {activeTab === 'sustainability' && (
            <motion.div
              key="sustainability"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <SustainabilityDashboard kpis={sustainabilityKPIs} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {selectedNode && (
          <NodeDetailModal node={selectedNode} onClose={() => setSelectedNode(null)} />
        )}
        {selectedUser && (
          <UserDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

// System Health Overview Component
const SystemHealthOverview = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">System Health</h2>
    <div className="space-y-4">
      {[
        { label: 'Blockchain Sync', status: 'Healthy', value: '100%', color: 'green' },
        { label: 'API Response', status: 'Good', value: '245ms', color: 'blue' },
        { label: 'Database Load', status: 'Normal', value: '67%', color: 'yellow' },
        { label: 'Storage Space', status: 'Healthy', value: '76% Free', color: 'green' }
      ].map((item) => (
        <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">{item.label}</p>
            <p className="text-sm text-gray-600">{item.value}</p>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium bg-${item.color}-100 text-${item.color}-700`}>
            {item.status}
          </span>
        </div>
      ))}
    </div>
  </div>
)

// Transaction Throughput Component
const TransactionThroughput = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Transaction Throughput</h2>
    <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl">
      <p className="text-gray-500">Real-time chart placeholder</p>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
      <div>
        <p className="text-gray-600">Peak TPS</p>
        <p className="font-bold text-2xl text-green-600">1,247</p>
      </div>
      <div>
        <p className="text-gray-600">Avg Response</p>
        <p className="font-bold text-2xl text-blue-600">125ms</p>
      </div>
    </div>
  </div>
)

// Recent Activities Component
const RecentActivities = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
    <div className="space-y-4">
      {[
        { action: 'Smart contract updated', time: '5 min ago', icon: Code, color: 'blue' },
        { action: 'New node joined network', time: '15 min ago', icon: Server, color: 'green' },
        { action: 'User role modified', time: '1 hour ago', icon: Users, color: 'purple' },
        { action: 'System backup completed', time: '2 hours ago', icon: Database, color: 'gray' }
      ].map((activity, index) => (
        <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
          <div className={`p-2 rounded-lg bg-${activity.color}-100`}>
            <activity.icon className={`h-4 w-4 text-${activity.color}-600`} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{activity.action}</p>
            <p className="text-xs text-gray-600">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Network Node Management Component
const NetworkNodeManagement = ({ nodes, onSelectNode }) => (
  <div>
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Network Nodes</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            <RefreshCw className="h-4 w-4" />
            <span className="text-sm">Refresh</span>
          </button>
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="space-y-4">
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            whileHover={{ scale: 1.01 }}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-pointer"
            onClick={() => onSelectNode(node)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-3">
                  <h3 className="font-semibold text-gray-900">{node.name}</h3>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    {node.type}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    node.status === 'Online' ? 'bg-green-100 text-green-700' :
                    node.status === 'Syncing' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {node.status}
                  </span>
                </div>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Location</p>
                    <p className="font-medium">{node.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">CPU Usage</p>
                    <p className="font-medium">{node.cpu}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Memory</p>
                    <p className="font-medium">{node.memory}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Network</p>
                    <p className="font-medium">{node.network}</p>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <MoreHorizontal className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
)

// User Role Management Component
const UserRoleManagement = ({ users, onSelectUser }) => (
  <div>
    <div className="p-6 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">User & Role Management</h2>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm">
            Add User
          </button>
        </div>
      </div>
    </div>

    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Login</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700">
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{user.lastLogin}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-gray-100 rounded" onClick={() => onSelectUser(user)}>
                      <Eye className="h-4 w-4 text-gray-500" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Edit className="h-4 w-4 text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

// Complaints Management Component
const ComplaintsManagement = () => {
  const [selectedComplaint, setSelectedComplaint] = useState(null)
  const [filterStatus, setFilterStatus] = useState('all')
  const [responseText, setResponseText] = useState('')

  const complaints = [
    {
      id: 'CMP-001',
      from: 'Rajesh Kumar',
      role: 'Farmer',
      category: 'Payment Issues',
      subject: 'Delayed payment for November harvest',
      message: 'I have not received payment for my Ashwagandha harvest submitted on November 15th. Please resolve this urgently.',
      priority: 'high',
      status: 'pending',
      createdAt: '2025-12-08 14:30',
      response: null
    },
    {
      id: 'CMP-002',
      from: 'Dr. Meera Singh',
      role: 'Laboratory',
      category: 'Equipment Malfunction',
      subject: 'HPLC machine calibration issue',
      message: 'The HPLC machine in Lab 2 is showing inconsistent readings. Need urgent maintenance.',
      priority: 'urgent',
      status: 'in-progress',
      createdAt: '2025-12-07 09:15',
      response: 'Maintenance team has been notified. They will visit by EOD.'
    },
    {
      id: 'CMP-003',
      from: 'Anita Iyer',
      role: 'Manufacturer',
      category: 'Supply Chain Delay',
      subject: 'Raw material delivery delayed',
      message: 'Batch HT-BATCH-2025-101 has not arrived despite being marked as dispatched 3 days ago.',
      priority: 'medium',
      status: 'resolved',
      createdAt: '2025-12-05 16:45',
      response: 'Issue resolved. Batch was held at quality check and has now been released. Expected delivery tomorrow.'
    },
    {
      id: 'CMP-004',
      from: 'Inspector Kavya Sharma',
      role: 'Regulator',
      category: 'System Access Problem',
      subject: 'Cannot access blockchain records for December',
      message: 'Getting error 403 when trying to view blockchain records dated after December 1st.',
      priority: 'high',
      status: 'pending',
      createdAt: '2025-12-08 11:00',
      response: null
    },
    {
      id: 'CMP-005',
      from: 'Priya Sharma',
      role: 'Consumer',
      category: 'Product Quality Issue',
      subject: 'Received expired product',
      message: 'The Ashwagandha tablets I received (Batch HT-LOT-2025-089) show expiry date as Nov 2025. Please investigate.',
      priority: 'urgent',
      status: 'in-progress',
      createdAt: '2025-12-06 18:20',
      response: 'We are investigating this issue with the manufacturer. Will update within 24 hours.'
    }
  ]

  const filteredComplaints = filterStatus === 'all' 
    ? complaints 
    : complaints.filter(c => c.status === filterStatus)

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'urgent': return 'bg-red-100 text-red-700'
      case 'high': return 'bg-orange-100 text-orange-700'
      case 'medium': return 'bg-yellow-100 text-yellow-700'
      default: return 'bg-green-100 text-green-700'
    }
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-gray-100 text-gray-700'
      case 'in-progress': return 'bg-blue-100 text-blue-700'
      case 'resolved': return 'bg-green-100 text-green-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getRoleColor = (role) => {
    switch(role) {
      case 'Farmer': return 'bg-green-100 text-green-700'
      case 'Laboratory': return 'bg-purple-100 text-purple-700'
      case 'Manufacturer': return 'bg-blue-100 text-blue-700'
      case 'Regulator': return 'bg-orange-100 text-orange-700'
      case 'Consumer': return 'bg-pink-100 text-pink-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div>
      <div className="p-6 border-b border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-xl">
              <MessageCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Complaints Management</h2>
              <p className="text-sm text-gray-600">Review and resolve stakeholder complaints</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search complaints..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-gray-900">{complaints.length}</div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600">{complaints.filter(c => c.status === 'pending').length}</div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{complaints.filter(c => c.status === 'in-progress').length}</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{complaints.filter(c => c.status === 'resolved').length}</div>
            <div className="text-sm text-gray-600">Resolved</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {filteredComplaints.map((complaint) => (
            <motion.div
              key={complaint.id}
              whileHover={{ scale: 1.01 }}
              className={`p-6 border rounded-xl transition-all cursor-pointer ${
                selectedComplaint?.id === complaint.id 
                  ? 'border-primary-500 bg-primary-50' 
                  : 'border-gray-200 hover:shadow-md'
              }`}
              onClick={() => setSelectedComplaint(selectedComplaint?.id === complaint.id ? null : complaint)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-sm text-gray-500">{complaint.id}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(complaint.role)}`}>
                    {complaint.role}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(complaint.priority)}`}>
                    {complaint.priority}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                    {complaint.status}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{complaint.createdAt}</span>
              </div>

              <div className="mb-2">
                <span className="font-medium text-gray-900">{complaint.from}</span>
                <span className="text-gray-500 mx-2">•</span>
                <span className="text-gray-600">{complaint.category}</span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-2">{complaint.subject}</h3>
              <p className="text-gray-600 text-sm">{complaint.message}</p>

              {complaint.response && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">Admin Response</span>
                  </div>
                  <p className="text-sm text-green-800">{complaint.response}</p>
                </div>
              )}

              {/* Response Form */}
              <AnimatePresence>
                {selectedComplaint?.id === complaint.id && complaint.status !== 'resolved' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Response
                    </label>
                    <textarea
                      value={responseText}
                      onChange={(e) => setResponseText(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      rows="3"
                      placeholder="Type your response to this complaint..."
                    />
                    <div className="flex items-center justify-end space-x-3 mt-3">
                      <button 
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                        onClick={() => setSelectedComplaint(null)}
                      >
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                        Mark In Progress
                      </button>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm flex items-center space-x-2">
                        <Send className="h-4 w-4" />
                        <span>Send & Resolve</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Smart Contract Management Component
const SmartContractManagement = ({ contracts }) => (
  <div>
    <h2 className="text-xl font-semibold text-gray-900 mb-6">Smart Contract Management</h2>
    <div className="space-y-4">
      {contracts.map((contract) => (
        <div key={contract.name} className="p-4 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-gray-900">{contract.name}</h3>
              <p className="text-sm text-gray-600">Version {contract.version}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                contract.status === 'Active' ? 'bg-green-100 text-green-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {contract.status}
              </span>
              <button className="bg-primary-600 text-white px-3 py-1 rounded text-xs hover:bg-primary-700">
                Update
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Contract Address</p>
              <p className="font-mono">{contract.deployedAt}</p>
            </div>
            <div>
              <p className="text-gray-500">Transactions</p>
              <p className="font-medium">{contract.transactions}</p>
            </div>
            <div>
              <p className="text-gray-500">Gas Used</p>
              <p className="font-medium">{contract.gasUsed}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Integration Control Panel Component
const IntegrationControlPanel = () => (
  <div className="grid lg:grid-cols-2 gap-8">
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">ERP Integrations</h3>
      <div className="space-y-3">
        {['SAP S/4HANA', 'Oracle ERP', 'Microsoft Dynamics', 'Custom ERP'].map((erp) => (
          <div key={erp} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="font-medium">{erp}</span>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-gray-600">Connected</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">IoT & API Management</h3>
      <div className="space-y-3">
        {['Sensor Network API', 'Weather Data API', 'Transportation API', 'Laboratory API'].map((api) => (
          <div key={api} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
            <span className="font-medium">{api}</span>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-sm text-gray-600">Active</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

// Sustainability Dashboard Component
const SustainabilityDashboard = ({ kpis }) => (
  <div className="space-y-8">
    <div className="grid lg:grid-cols-2 gap-8">
      {kpis.map((kpi) => (
        <div key={kpi.metric} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <kpi.icon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{kpi.metric}</h3>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-primary-600">{kpi.value}</span>
                <span className="text-sm text-gray-600">Target: {kpi.target}</span>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-primary-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(kpi.progress, 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">{kpi.progress}% of target achieved</p>
        </div>
      ))}
    </div>
    
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Analytics</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">847</div>
          <div className="text-sm text-gray-600">Active Farmers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 mb-2">96.2%</div>
          <div className="text-sm text-gray-600">Lab Reliability Score</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">94.8%</div>
          <div className="text-sm text-gray-600">Processing Efficiency</div>
        </div>
      </div>
    </div>
  </div>
)

// Modal Components
const NodeDetailModal = ({ node, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Node Details - {node.name}</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(node).filter(([key]) => key !== 'id').map(([key, value]) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
          Restart Node
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          View Logs
        </button>
      </div>
    </motion.div>
  </motion.div>
)

const UserDetailModal = ({ user, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">User Details - {user.name}</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(user).filter(([key]) => key !== 'id' && key !== 'permissions').map(([key, value]) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
              <p className="font-semibold">{value}</p>
            </div>
          ))}
        </div>
        
        <div>
          <label className="text-sm font-medium text-gray-500">Permissions</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {user.permissions.map((permission) => (
              <span key={permission} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md">
                {permission}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-200">
        <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
          Edit Permissions
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          View Activity
        </button>
      </div>
    </motion.div>
  </motion.div>
)

export default AdminLandingPage

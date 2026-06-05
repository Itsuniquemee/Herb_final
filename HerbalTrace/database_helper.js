/**
 * Basic local SQLite helper class (stub).
 * This file follows a sqlite-style API shape for future expansion.
 */
class DatabaseHelper {
  constructor(dbPath = 'herb_local.db') {
    this.dbPath = dbPath;
  }

  async initialize() {
    // TODO: wire sqlite client and create tables.
    return { initialized: true, dbPath: this.dbPath };
  }

  async insertRecord(table, payload) {
    // TODO: replace with actual INSERT implementation.
    return { table, payload, status: 'queued' };
  }

  async fetchRecords(table) {
    // TODO: replace with actual SELECT implementation.
    return { table, rows: [] };
  }
}

module.exports = DatabaseHelper;

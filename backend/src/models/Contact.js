import pool from '../config/database.js';

export const createContactTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message LONGTEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;

  try {
    const connection = await pool.getConnection();
    await connection.query(query);
    connection.release();
    console.log('Contacts table created or already exists');
  } catch (error) {
    console.error('Error creating contacts table:', error);
  }
};

export const insertContact = async (name, email, subject, message) => {
  const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';

  try {
    const connection = await pool.getConnection();
    const [result] = await connection.query(query, [name, email, subject, message]);
    connection.release();
    return result;
  } catch (error) {
    console.error('Error inserting contact:', error);
    throw error;
  }
};

export const getContacts = async () => {
  const query = 'SELECT * FROM contacts ORDER BY created_at DESC';

  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(query);
    connection.release();
    return rows;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

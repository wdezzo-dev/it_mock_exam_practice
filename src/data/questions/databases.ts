import { Question } from '../../types';

export const databaseQuestions: Question[] = [
  {
    id: 131,
    subject: 'databases',
    questionText: 'A database is',
    options: ['A programming language', 'An organized collection of data', 'An operating system', 'A web browser'],
    correctAnswerIndex: 1,
    explanation: 'A database is an organized collection of structured data stored electronically.'
  },
  {
    id: 132,
    subject: 'databases',
    questionText: 'Which database type stores data in tables?',
    options: ['NoSQL', 'RDBMS', 'RAID', 'XML'],
    correctAnswerIndex: 1,
    explanation: 'A Relational Database Management System (RDBMS) stores data in tables consisting of rows and columns.'
  },
  {
    id: 133,
    subject: 'databases',
    questionText: 'SQL stands for',
    options: ['Structured Query Language', 'Simple Query Logic', 'Secure Query Language', 'Standard Queue Language'],
    correctAnswerIndex: 0,
    explanation: 'SQL stands for Structured Query Language.'
  },
  {
    id: 134,
    subject: 'databases',
    questionText: 'Which SQL command creates a table?',
    options: ['INSERT', 'CREATE', 'SELECT', 'UPDATE'],
    correctAnswerIndex: 1,
    explanation: 'CREATE TABLE creates a new table in a database schema.'
  },
  {
    id: 135,
    subject: 'databases',
    questionText: 'Which SQL command adds new records?',
    options: ['UPDATE', 'INSERT', 'MODIFY', 'APPEND'],
    correctAnswerIndex: 1,
    explanation: 'INSERT INTO inserts new rows into a database table.'
  },
  {
    id: 136,
    subject: 'databases',
    questionText: 'Which SQL command retrieves data?',
    options: ['GET', 'SELECT', 'SHOW', 'READ'],
    correctAnswerIndex: 1,
    explanation: 'SELECT retrieves rows from one or more tables.'
  },
  {
    id: 137,
    subject: 'databases',
    questionText: 'Which clause filters rows?',
    options: ['GROUP BY', 'HAVING', 'WHERE', 'ORDER BY'],
    correctAnswerIndex: 2,
    explanation: 'The WHERE clause filters individual records before grouping or aggregation.'
  },
  {
    id: 138,
    subject: 'databases',
    questionText: 'Which command changes existing data?',
    options: ['INSERT', 'UPDATE', 'CREATE', 'SELECT'],
    correctAnswerIndex: 1,
    explanation: 'UPDATE modifies existing values in table records.'
  },
  {
    id: 139,
    subject: 'databases',
    questionText: 'Which command removes rows from a table?',
    options: ['REMOVE', 'DELETE', 'DROP', 'ERASE'],
    correctAnswerIndex: 1,
    explanation: 'DELETE removes specific rows from a table while keeping the table structure intact.'
  },
  {
    id: 140,
    subject: 'databases',
    questionText: 'ORDER BY is used to',
    options: ['Join tables', 'Sort results', 'Delete records', 'Create indexes'],
    correctAnswerIndex: 1,
    explanation: 'ORDER BY sorts query results in ascending (ASC) or descending (DESC) order.'
  },
  {
    id: 141,
    subject: 'databases',
    questionText: 'DISTINCT',
    options: ['Adds duplicates', 'Removes duplicate results', 'Deletes rows', 'Creates keys'],
    correctAnswerIndex: 1,
    explanation: 'DISTINCT filters out duplicate records from query output.'
  },
  {
    id: 142,
    subject: 'databases',
    questionText: 'Which function counts rows?',
    options: ['SUM()', 'COUNT()', 'AVG()', 'MAX()'],
    correctAnswerIndex: 1,
    explanation: 'COUNT() returns the number of rows matching specified criteria.'
  },
  {
    id: 143,
    subject: 'databases',
    questionText: 'AVG() calculates',
    options: ['Total', 'Average', 'Minimum', 'Maximum'],
    correctAnswerIndex: 1,
    explanation: 'AVG() computes the average value of a numeric column.'
  },
  {
    id: 144,
    subject: 'databases',
    questionText: 'GROUP BY',
    options: ['Sorts data', 'Groups rows for aggregation', 'Deletes duplicates', 'Creates indexes'],
    correctAnswerIndex: 1,
    explanation: 'GROUP BY groups rows sharing identical values so aggregate functions can summarize each group.'
  },
  {
    id: 145,
    subject: 'databases',
    questionText: 'HAVING filters',
    options: ['Individual rows', 'Groups', 'Columns', 'Tables'],
    correctAnswerIndex: 1,
    explanation: 'HAVING filters aggregated group values produced by GROUP BY.'
  },
  {
    id: 146,
    subject: 'databases',
    questionText: 'LIKE is used for',
    options: ['Sorting', 'Pattern matching', 'Joining', 'Updating'],
    correctAnswerIndex: 1,
    explanation: 'LIKE is used in a WHERE clause for string pattern matching using wildcards (% and _).'
  },
  {
    id: 147,
    subject: 'databases',
    questionText: 'BETWEEN selects',
    options: ['Random values', 'A range of values', 'Duplicate values', 'NULL values'],
    correctAnswerIndex: 1,
    explanation: 'BETWEEN selects values within an inclusive range.'
  },
  {
    id: 148,
    subject: 'databases',
    questionText: 'IN compares',
    options: ['Multiple possible values', 'Numbers only', 'Tables', 'Keys'],
    correctAnswerIndex: 0,
    explanation: 'IN allows specifying multiple values in a WHERE clause.'
  },
  {
    id: 149,
    subject: 'databases',
    questionText: 'IS NULL checks',
    options: ['Empty strings', 'Missing values', 'Duplicate values', 'Integers'],
    correctAnswerIndex: 1,
    explanation: 'IS NULL tests whether a column contains missing (NULL) values.'
  },
  {
    id: 150,
    subject: 'databases',
    questionText: 'INNER JOIN returns',
    options: ['Only matching rows', 'All rows from the left table', 'All rows from both tables', 'Only unmatched rows'],
    correctAnswerIndex: 0,
    explanation: 'INNER JOIN selects records that have matching values in both tables.'
  },
  {
    id: 151,
    subject: 'databases',
    questionText: 'LEFT JOIN returns',
    options: ['Matching rows only', 'All left table rows and matching right rows', 'All right table rows', 'Only unmatched rows'],
    correctAnswerIndex: 1,
    explanation: 'LEFT JOIN returns all records from the left table and matching records from the right table.'
  },
  {
    id: 152,
    subject: 'databases',
    questionText: 'UNION',
    options: ['Deletes duplicates automatically while combining compatible result sets', 'Creates tables', 'Drops databases', 'Creates indexes'],
    correctAnswerIndex: 0,
    explanation: 'UNION combines results of two or more SELECT statements into a single result set and removes duplicates.'
  },
  {
    id: 153,
    subject: 'databases',
    questionText: 'A Primary Key must be',
    options: ['NULL', 'Unique', 'Duplicate', 'Optional'],
    correctAnswerIndex: 1,
    explanation: 'A Primary Key uniquely identifies each record in a table and cannot contain NULL values.'
  },
  {
    id: 154,
    subject: 'databases',
    questionText: 'A Foreign Key',
    options: ['Uniquely identifies a row', 'Links related tables', 'Stores passwords', 'Creates indexes'],
    correctAnswerIndex: 1,
    explanation: 'A Foreign Key points to a Primary Key in another table to establish relational links.'
  },
  {
    id: 155,
    subject: 'databases',
    questionText: 'An index primarily',
    options: ['Encrypts data', 'Speeds up searches', 'Deletes duplicates', 'Compresses tables'],
    correctAnswerIndex: 1,
    explanation: 'Indexes optimize search speed and data retrieval performance.'
  },
  {
    id: 156,
    subject: 'databases',
    questionText: 'ACID stands for',
    options: ['Atomicity, Consistency, Isolation, Durability', 'Authentication, Control, Integrity, Database', 'Access, Consistency, Identity, Durability', 'Atomicity, Compression, Isolation, Data'],
    correctAnswerIndex: 0,
    explanation: 'ACID properties guarantee reliable database transactions: Atomicity, Consistency, Isolation, Durability.'
  },
  {
    id: 157,
    subject: 'databases',
    questionText: 'COMMIT',
    options: ['Undoes changes', 'Saves a transaction permanently', 'Deletes a table', 'Creates a backup'],
    correctAnswerIndex: 1,
    explanation: 'COMMIT permanently saves all changes made during the current transaction.'
  },
  {
    id: 158,
    subject: 'databases',
    questionText: 'ROLLBACK',
    options: ['Saves changes', 'Undoes uncommitted changes', 'Creates a transaction', 'Deletes the database'],
    correctAnswerIndex: 1,
    explanation: 'ROLLBACK reverts uncommitted changes made during a transaction.'
  },
  {
    id: 159,
    subject: 'databases',
    questionText: 'Normalization aims to',
    options: ['Increase redundancy', 'Reduce redundancy and improve consistency', 'Encrypt data', 'Compress tables'],
    correctAnswerIndex: 1,
    explanation: 'Normalization organizes database tables to eliminate data redundancy and prevent anomalies.'
  },
  {
    id: 160,
    subject: 'databases',
    questionText: 'Which relationship requires a junction table?',
    options: ['One-to-One', 'One-to-Many', 'Many-to-Many', 'Self-reference'],
    correctAnswerIndex: 2,
    explanation: 'Many-to-Many relationships are implemented using a junction (associative) table with foreign keys.'
  }
];

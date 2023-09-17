-- Drop tables if they exist
DROP TABLE IF EXISTS todos;
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

-- Create todos table
CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  user_id INT REFERENCES users(id)
);

-- Insert data into users table
INSERT INTO users (username, email) VALUES
  ('user1', 'user1@example.com'),
  ('user2', 'user2@example.com'),
  ('user3', 'user3@example.com');

-- Insert data into todos table
INSERT INTO todos (task, user_id) VALUES
  ('Task 1', 1),
  ('Task 2', 1),
  ('Task 3', 2);

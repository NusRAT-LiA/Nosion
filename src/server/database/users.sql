-- CREATE SCHEMA online_sustainability_project;

USE online_sustainability_project;

CREATE TABLE users (			-- add a field on transaction with the platform providers
	userID	 int PRIMARY KEY auto_increment,
	username varchar(30) NOT NULL,
    emailID varchar(40) NOT NULL,
    wallet_id int NOT NULL,		-- Unique
    password char(40) NOT NULL
);

ALTER TABLE users auto_increment = 10000001; -- starting from a initial value. fix it.

-- test inputs
INSERT INTO users (userID, username, emailID, wallet_id, password) values (default, "joyarnabd", "joyaranbhere@gmail.com", 10012111, sha1("myPassword1223"));
SELECT * FROM users;
    
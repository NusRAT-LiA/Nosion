-- CREATE SCHEMA online_sustainability_project;

USE online_sustainability_project;

CREATE TABLE blocks (
	block_no int PRIMARY KEY UNIQUE NOT NULL,
    prev_hash binary(64) UNIQUE,			-- data type fixed
    current_hash binary(64) UNIQUE NOT NULL,		-- data type fixed
    project_ID varchar(100) NOT NULL,
    acceptance_rate double NOT NULL, 
    last_updated DATETIME 			-- FORMAT: YYYY-MM-DD hh:mm:ss
);
    
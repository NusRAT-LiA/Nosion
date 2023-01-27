CREATE SCHEMA online_sustainability_project;

USE online_sustainability_project;
CREATE TABLE researchers (
	researcher_id int PRIMARY KEY,
    researcher_name varchar(50) NOT NULL,
    working_institution varchar(100) NOT NULL,
    stars double NOT NULL,
    status tinyint NOT NULL,			-- boolean
	current_block int UNIQUE NOT NULL
);
    
-- CREATE SCHEMA online_sustainability_project;

USE online_sustainability_project;
CREATE table projects_info (
	project_id int PRIMARY KEY auto_increment,
	project_name varchar(100) NOT NULL,
    IPFS_dir varchar(50) NOT NULL,
    researcher_ID varchar(50) NOT NULL,
    acceptance_rate double default 0.00,
    verdict bit NOT NULL default 0
);

ALTER TABLE projects_info auto_increment = 1001010;   -- fix a start value
    
    

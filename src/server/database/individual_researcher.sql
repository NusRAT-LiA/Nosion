-- CREATE SCHEMA online_sustainability_project;

USE online_sustainability_project;

CREATE TABLE researchers_projects (
	researcher_id int PRIMARY KEY auto_increment,
    project_id int NOT NULL,
    block_no int NOT NULL
);

ALTER TABLE researchers_projects auto_increment = 11000101010; 		-- fix a starting value for the field.
    

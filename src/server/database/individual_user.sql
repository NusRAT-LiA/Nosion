-- CREATE SCHEMA online_sustainability_project;

USE online_sustainability_project;
CREATE table individual_user (
	project_id int PRIMARY KEY,
	project_name varchar(100) NOT NULL,
    project_link varchar(50) NOT NULL,
    acceptance_rate double,
    verdict varchar(5) NOT NULL
);
    
    

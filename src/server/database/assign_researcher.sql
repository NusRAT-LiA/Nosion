
-- appoint researchers to a specific project

delimiter //
CREATE FUNCTION assign_researcher()
RETURNS varchar(100) 

begin
	DECLARE rowCount INT DEFAULT 0;
    DECLARE i int default 0;
    DECLARE j int default 0;
    DECLARE str varchar(100) default NULL;
	SELECT COUNT(*) FROM projects_info INTO rowProjects;
    SELECT COUNT(*) FROM researchers INTO rowResearchers;
    SET i = 0;
    
    WHILE i <= rowProjects and j <= rowResearchers and cnt < 5 DO 
		if researchers.status != null
        then
			SET str = str + researchers.researcher_id and
			researchers.status = 1 and 
            cnt = cnt + 1;		-- keeps the track of assigned researcher number
		else 
			SET j = j+1;
	END IF;
    
    RETURN str;
    
	END WHILE;

end;

// delimiter;
 -- CREATE SCHEMA online_sustainability_project;
 
 USE online_sustainability_project;
 
 CREATE TABLE platform_providers (
	provider_id int PRIMARY KEY auto_increment,		-- start  from a specific number 
    provider_name VARCHAR(100) NOT NULL,
    provider_password char(40) NOT NULL, 		-- fix data type
    provider_wallet_id int NOT NULL UNIQUE,
    is_subscription_valid tinyint NOT NULL			-- boolean
);

-- test input
insert into platform_providers(
	provider_id,
    provider_name,
    provider_password,
    provider_wallet_id,
    is_subscription_valid
) values (default, "Random", SHA1("FuckCortana$007"), 10010232, 1);

-- select length(SHA1("FuckCortana$007"));

-- SELECT * FROM platform_providers;

 
USE db_mpetruse;
INSERT INTO ft_table(login, `group`, creation_date) 
    SELECT 'last_name', 'birthdate', group AS 'other'
    FROM user_card
    WHERE LEN(`last_name`) < 9
    LIKE '%a%'
    LIMIT 10;

-- INSERT INTO ft_table(login, creation_date, `group`)
-- SELECT last_name, birthdate, 'other' FROM user_card
-- WHERE last_name LIKE '%a%' AND LENGTH(last_name) < 9
-- LIMIT 10
-- ORDER BY last_name;
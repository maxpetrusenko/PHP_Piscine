SELECT *
FROM `distrib`
WHERE  id_distrib = 42 OR id_distrib between 62 and 70 or id_distrib = 71 or id_distrib between 88 and 90
OR lower(name) LIKE '%y%y%'
LIMIT 2,5;


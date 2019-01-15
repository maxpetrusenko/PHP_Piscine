SELECT title, summary
from film
WHERE UPPER(summary) LIKE '%Vincent%'
ORDER BY id_film ASC



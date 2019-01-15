-- SELECT id_genre as 'id_genre' ,genre_name as 'name-genre', distrib.id_distrib as 'id_distrib'
-- INNER JOIN genre ON genre.id_genre   = film.id_genre
-- INNER JOIN distrib ON distrib.id_distrib = distrib.id_distrib
-- from film
-- WHERE id_genre BETWEEN 4 and 8

SELECT genre.id_genre AS 'id_genre',
       genre.nom AS 'nom genre',
       distrib.id_distrib AS 'id_distrib',
       distrib.nom AS 'nom distrib',
       film.titre AS 'titre film'
  FROM film
  LEFT JOIN genre ON genre.id_genre = film.id_genre
  LEFT JOIN distrib ON distrib.id_distrib = film.id_distrib
  WHERE film.id_genre BETWEEN 4 AND 8
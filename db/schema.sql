
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id INT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);
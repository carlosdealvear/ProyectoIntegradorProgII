CREATE DATABASE Falsebook;

USE Falsebook;

CREATE TABLE usuarios(
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(30) NOT NULL,
apellido VARCHAR(30) NOT NULL,
email VARCHAR(120) UNIQUE NOT NULL,
password VARCHAR(200) NOT NULL,
fecha DATE NOT NULL,
img VARCHAR(1000) NOT NULL
);

CREATE TABLE posteo(
id INT PRIMARY KEY AUTO_INCREMENT,
img VARCHAR(1000) NOT NULL,
descrip VARCHAR(200),
fecha DATE NOT NULL,
id_usuario INT NOT NULL,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
id INT PRIMARY KEY AUTO_INCREMENT,
fecha DATETIME NOT NULL,
texto VARCHAR(200) NOT NULL,
id_usuario INT NOT NULL,
id_posteo INT NOT NULL,

FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
FOREIGN KEY (id_posteo) REFERENCES posteo(id)
);


INSERT INTO usuarios VALUES(default,"Franco","Leone","fleone@udesa.edu.ar","12345","2002-07-04","no tengo la imagen todavia");

INSERT INTO usuarios VALUES(default,"Sophia","Kim","skim@udesa.edu.ar","12346","2002-09-12","no tengo la imagen todavia");

INSERT INTO usuarios VALUES(default,"Carlos","De Alvear","cdealvear@udesa.edu.ar","12347","2002-01-10","no tengo la imagen todavia");

INSERT INTO usuarios VALUES(default,"Diego Armando","Maradona","dmaradona@udesa.edu.ar","12345","1960-10-30","no tengo la imagen todavia");

INSERT INTO usuarios VALUES(default,"Lionel Andres","Messi","lmessi@udesa.edu.ar","12345","1987-06-24","no tengo la imagen todavia");

INSERT INTO posteo VALUES(default,"imagen del posteo","Aca tomando mates con mis compas de programacion","2021-9-21","1");

INSERT INTO posteo VALUES(default,"imagen del posteo","Una con Leo","2021-9-22","1");

INSERT INTO posteo VALUES(default,"imagen del posteo","Estudiandoo","2021-9-23","2");

INSERT INTO posteo VALUES(default,"imagen del posteo","El Diego me invito a un asado!","2021-9-27","2");

INSERT INTO posteo VALUES(default,"imagen del posteo","Aca con Franco y Sofi!","2021-9-27","4");

INSERT INTO posteo VALUES(default,"imagen del posteo","Que duro esta programacioon loco","2021-9-27","4");

INSERT INTO posteo VALUES(default,"imagen del posteo","Throwback al mundial del 86","2021-9-20","5");

INSERT INTO posteo VALUES(default,"imagen del posteo","Con un gran amigo","2021-9-27","5");

INSERT INTO posteo VALUES(default,"imagen del posteo","Asado con los pibes","2021-9-27","7");

INSERT INTO posteo VALUES(default,"imagen del posteo","#CampeonesDeAmerica","2021-9-27","7");

DELETE FROM posteo 
WHERE id = 3;

INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","dale que se aprueba!","1","4");
INSERT INTO comentarios VALUES(default,"2021-10-03 10:20:31","Eee inviten malaonda","1","5");
INSERT INTO comentarios VALUES(default,"2021-12-23 12:01:54","grande leo!","1","10");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","ponete las pilas!","1","6");

INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","muy buena tardee","2","1");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","que pinta!","1","10");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","grande diegote!","1","8");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","daale carloss!","1","7");

INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","aver si aprobamos","4","1");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","te pidio el una foto??","4","2");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","que alegria","4","8");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","noo que ganas!","4","5");

INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","facha leo","5","2");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","Un placer!!","5","5");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","Que lindo equipo!","5","11");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","ganadores","5","10");

INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","facha leo","7","2");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","Un placer!!","7","5");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","Que lindo equipo!","7","11");
INSERT INTO comentarios VALUES(default,"2021-11-03 08:00:00","ganadores!!","7","10");

ALTER TABLE usuarios
 ADD username VARCHAR(40) NOT NULL ;
 
 UPDATE `Falsebook`.`usuarios` SET `username` = 'francoleone1' WHERE (`id` = '1');
 UPDATE `Falsebook`.`usuarios` SET `username` = 'sophia.kim' WHERE (`id` = '2');
 UPDATE `Falsebook`.`usuarios` SET `username` = 'carlitosdealvear' WHERE (`id` = '4');
 UPDATE `Falsebook`.`usuarios` SET `username` = 'eldiego1986' WHERE (`id` = '5');
 UPDATE `Falsebook`.`usuarios` SET `username` = 'leomessi123' WHERE (`id` = '7');
 


 






CREATE DATABASE epam_calorie_app;
\connect epam_calorie_app;
CREATE TABLE users (user_id SERIAL, user_name TEXT NOT NULL, PRIMARY KEY (user_id));


CREATE TABLE consumption (cons_id SERIAL, cons_name TEXT NOT NULL, cons_calories INT NOT NULL, date DATE NULL DEFAULT now(), user_id INT NOT NULL REFERENCES users (user_id), PRIMARY KEY (cons_id));

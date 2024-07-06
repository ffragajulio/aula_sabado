create database aula_sabado_crud;
use aula_sabado_crud;

create table users(
	id int not null auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

select * from users;
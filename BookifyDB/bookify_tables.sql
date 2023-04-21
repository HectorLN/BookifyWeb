use bookify

create table Usuario(idUsuario int identity(1,1) primary key, passwrd varchar(20), userEmail varchar(45), userName varchar(45));

create table Libros (idLibros int identity(1,1) primary key, bookName varchar(55), bookDescription text, bookAuthor varchar(50), bookPic image, bookGenre varchar(20), bookSource varchar(50));

create table Favorites (idFavorites int identity(1,1) primary key, favBookID int foreign key references Libros(idLibros), favUserID int foreign key references Usuario(idUsuario));

create table Administrator (idAdmin int identity(1,1) primary key, adminUser int foreign key references Usuario(idUsuario));
CREATE TABLE EMPLOYEE (
  Id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  adress TEXT NOT NULL
  
);

-- insert
INSERT INTO EMPLOYEE VALUES (01, 'Маша', '10', 'Москва');
INSERT INTO EMPLOYEE VALUES (02, 'Катя', '20', 'Нижний Новгород');
INSERT INTO EMPLOYEE VALUES (03, 'Инна', '30', 'Омск');
INSERT INTO EMPLOYEE VALUES (04, 'Петя', '40', 'Рязань');
INSERT INTO EMPLOYEE VALUES (05, 'Вася', '50', 'Владивосток');

-- fetch выведем для проверки работоспособности запроса
SELECT * FROM EMPLOYEE WHERE age < '40';
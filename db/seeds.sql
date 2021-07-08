INSERT INTO department (name)
VALUES 
('Front Desk'),
('Sales'),
('Management'),
('Technician');

INSERT INTO role (title, salary, department_id)
VALUES
("Customer Service", 35000, 1),
("Senior Management", 65000, 3),
("Supervisor", 45000, 3),
("Car Audio", 30000, 2),
("Car Install", 40000, 4),
("Home Theater", 30000, 2),
("Computers", 30000, 2),
("Not a Geek", 45000, 4),
("Store Manager", 120000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Mike", "McEwen", 9, NULL),
("Linday", "McEwen", 2, 1),
("Eleanor", "McEwen", 6, 2),
("Oliver", "McEwen", 7, 2),
("Anderson", "McEwen", 5, 2),
("Adaline", "McEwen", 3, 2),
("Bark", "Tree", 8, 6),
("Willow", "Birch", 6, 6),
("Frank", "Sanatra", 1, 2),
("Bryson", "Taylor", 4, 6);



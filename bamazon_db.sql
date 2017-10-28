DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO `products` 
(`product_name`, `department_name`, `price`, `stock_quantity`)
VALUES 
("Extra-wide Umbrella", "Home Goods", 5.00, 1000), 
("Pirate Kite", "Toys & Games", 6.50, 250), 
("Red Dress", "Apparel", 45.00, 150),
("Quicksilver Hat", "Apparel", 25.00, 400),
("Minecraft Lego Set", "Toys & Games", 55.00, 5000),
("Glass Vase", "Home Goods", 49.99, 600),
("Wonder Woman Shirt", "Apparel", 29.99, 450),
("Door Mat", "Home Goods", 10.99, 125),
("NorthFace Snowboarding Jacket", "Apparel", 450.00, 800),
("Monopoly", "Toys & Games", 15.99, 4000);
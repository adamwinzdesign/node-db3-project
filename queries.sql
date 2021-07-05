-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT ProductName, CategoryName from Product
JOIN Category on Product.CategoryId = Category.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
-- Need to fix, currently does not work
SELECT o.Id, o.ShipVia
FROM [Order] as o
JOIN Shipper
ON o.ShipVia = Shipper.CompanyName
WHERE o.OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT p.ProductName, od.Quantity
FROM [OrderDetail] as od
JOIN [Product] as p
  on p.id = od.productid
WHERE od.OrderId = "10251"

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT o.id as "Order ID", c.CompanyName as "Company Name", e.LastName as "Employee"
FROM [Order] as o
JOIN [Customer] as c ON c.id = o.CustomerId
JOIN [Employee] as e ON e.id = o.EmployeeId

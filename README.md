# API Project with Node.js, Express, Sequelize, and MySQL

## Project Description
This API provides functionalities for user registration, authentication, and management, as well as a complete CRUD system for categories, products, and orders. Additionally, it implements relationships between models, validations, and uses seeders to populate the database with initial data.

### Key Features
- **User registration** with password encryption using Bcrypt.
- **User authentication** with JWT and authorization middleware.
- Full CRUD for **categories**, **products**, and **orders**.
- **Many-to-Many** and **One-to-Many** relationships implemented between entities.
- Use of seeders to initialize data.
- Validations at both model and controller levels.


### Characteristics:
- Roles (administrator and user).
- Routes protected with authentication middlewares.
- Advanced filters for products (by price, name, categories, etc.).

---

## Technologies Used
- **Backend:** Node.js, Express.
- **Database:** MySQL.
- **ORM:** Sequelize.
- **Authentication:** Bcrypt and JWT.

---

## Endpoints

### 1. Categories
#### Categories CRUD
- **Create category:** `POST /categories`
- **Update category:** `PUT /categories/:id`
- **Delete category:** `DELETE /categories/:id`
- **Get all categories:** `GET /categories` (includes associated products)
- **Get category by ID:** `GET /categories/:id`
- **Search category by name:** `GET /categories?name=example`

---

### 2. Products
#### Products CRUD
- **Create product:** `POST /products`  
  *Requires authentication. Validates that all fields are complete.*  
- **Update product:** `PUT /products/:id`  
  *Requires authentication.*  
- **Delete product:** `DELETE /products/:id`  
  *Requires authentication.*  
- **Get all products:** `GET /products` (includes associated categories).
- **Get product by ID:** `GET /products/:id`
- **Search product by name:** `GET /products?name=example`
- **Search product by price:** `GET /products?price=100`
- **Sort products by price (descending):** `GET /products?order=desc`

---

### 3. Orders
- **View orders with associated products:** `GET /orders`
- **Create order:** `POST /orders`  

---

### 4. Users
#### User Functions
- **Registration:** `POST /users/register`  
  *Uses Bcrypt to encrypt the password.*  
- **Login:** `POST /users/login`  
  *Generates a JWT token.*  
- **Get authenticated user info:** `GET /users/me`  
  *Includes associated orders and products.*  
- **Logout:** `POST /users/logout`  
- **Field validation during registration:** Returns a message if fields are incomplete.

---

## Model Relationships
1. **Many-to-Many:** Relationship between products and orders.
2. **One-to-Many:** Relationship between categories and products.

---

## Seeders
- **Initial Products:** 5 products are created using a seeder.  
  *Seeder location:* `/seeders/2024xxxx-create-products.js`

---

## Middleware:

This project includes some custom middlewares that help in user authentication and authorization.

authentication: This middleware ensures that the user is authenticated. Checks the JWT token in requests to ensure that only authenticated users can access certain routes.
isAdmin: This middleware checks whether the authenticated user has administrator permissions, which is required for some operations, such as creating and updating products.
Both middlewares are located in the middleware/authentication.js file.

## Contribution:

Contributions are welcome. If you want to contribute to this project, follow these steps:

1- Fork the repository.
2- Create a new branch for your contribution (git checkout -b my-new-feature).
3- Make your changes and commit (git commit -am 'Add new functionality').
4- Upload your changes to your repository (git push origin my-new-feature).
5- Open a pull request describing the changes you have made.

Make sure you follow coding best practices and include tests for new functionality.

## Entity-relationship diagram (ERD)
<img width="1128" alt="Captura de pantalla 2024-12-01 a las 17 45 27" src="https://github.com/user-attachments/assets/32eedcb4-c378-49dd-96c0-99cf92c911fc">


## License 
This project is under the MIT license.

## Author: Catalina Baquerizo Lucero.

### Clone the Repository
```bash
git clone <repository-url>
cd <project-name>

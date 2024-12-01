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

## Instructions to Run the Project:

## Entity-relationship diagram (ERD)

![alt text](<Captura de pantalla 2024-11-27 a las 22.11.59.png>)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <project-name>

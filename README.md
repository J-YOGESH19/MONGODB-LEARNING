# 🍃 MongoDB Learning Journey

> A hands-on MongoDB practice repository — from basics to advanced queries, using a real-world **E-Commerce** database.

![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green?style=for-the-badge&logo=mongodb)
![Status](https://img.shields.io/badge/Status-In%20Progress-yellow?style=for-the-badge)
![Level](https://img.shields.io/badge/Level-Beginner%20→%20Pro-blue?style=for-the-badge)

---

## 📖 About This Repository

This repository contains all my MongoDB practice code as I learn from **beginner to pro**, step by step. I'm using a real-world **E-Commerce** project as my practice database — making it easy to understand concepts with real examples.

---

## 🗄️ Database Structure

The database used is called **`ecommerce`** and contains **3 collections**:

```
ecommerce (database)
│
├── 📦 products       → Store product listings
├── 🧾 orders         → Customer orders
└── 💬 contacts       → Customer messages
```

---

## 📦 Collections Overview

### 1. `products` Collection
Stores all product information.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated unique ID |
| `name` | String | Product name |
| `price` | Number | Price in rupees (₹) |
| `category` | String | Product category |
| `stock` | Number | Available stock count |
| `ratings` | Number | Rating out of 5 |
| `tags` | Array | Search tags |
| `createdAt` | Date | Date of entry |

**Sample Data:**
```js
{ name: "Wireless Mouse",     price: 799,   category: "Electronics", stock: 120, ratings: 4.5 }
{ name: "Mechanical Keyboard", price: 2499, category: "Electronics", stock: 80,  ratings: 4.8 }
{ name: "Gaming Laptop",      price: 85999, category: "Computers",   stock: 30,  ratings: 4.6 }
```

---

### 2. `orders` Collection
Stores customer order details including nested product info.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated unique ID |
| `orderId` | String | Custom order ID (e.g. ORD001) |
| `user` | String | Customer name |
| `products` | Array | List of ordered products |
| `total` | Number | Total order amount (₹) |
| `status` | String | `Delivered` / `Pending` / `Cancelled` |
| `createdAt` | Date | Order date |

**Sample Data:**
```js
{ orderId: "ORD001", user: "John Doe",   total: 3298,  status: "Delivered" }
{ orderId: "ORD002", user: "Jane Smith", total: 85999, status: "Pending"   }
```

---

### 3. `contacts` Collection
Stores customer contact/support messages.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated unique ID |
| `name` | String | Customer name |
| `message` | String | Message content |
| `phone` | String | Contact number |
| `createdAt` | Date | Submitted date |

**Sample Data:**
```js
{ name: "Alice", message: "Loved your website!",              phone: "9876543210" }
{ name: "Bob",   message: "Do you have discounts on laptops?", phone: "9123456789" }
{ name: "Carol", message: "I want to cancel my order.",        phone: "9988776655" }
```

---

## 📚 Topics Covered

- [x] What is MongoDB & NoSQL
- [x] Installation & Setup (`mongod`, `mongosh`, Compass)
- [x] Databases & Collections
- [x] Insert Documents (`insertOne`, `insertMany`)
- [ ] Read / Find Queries
- [ ] Query Operators & Filters
- [ ] Update Documents
- [ ] Delete Documents
- [ ] Indexes
- [ ] Aggregation Pipeline
- [ ] Schema Design & Data Modeling
- [ ] MongoDB with Node.js (Mongoose)
- [ ] Advanced Topics (Transactions, Replication)

---

## 🚀 Getting Started

### Prerequisites
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- [MongoDB Shell (mongosh)](https://www.mongodb.com/try/download/shell)
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) *(optional, GUI)*

### Run Locally

**1. Start the MongoDB server:**
```bash
mongod
```

**2. Open MongoDB shell in a new terminal:**
```bash
mongosh
```

**3. Switch to the ecommerce database:**
```js
use ecommerce
```

**4. Insert sample data:**
```js
// Copy and run the insert scripts from the /data folder
```

---

## 📁 Folder Structure

```
mongodb-learning/
│
├── 📂 basics/
│   ├── 01_intro.md
│   ├── 02_databases_collections.js
│   └── 03_insert_documents.js
│
├── 📂 queries/
│   ├── 04_find_queries.js
│   ├── 05_query_operators.js
│   └── 06_update_delete.js
│
├── 📂 advanced/
│   ├── 07_indexes.js
│   ├── 08_aggregation.js
│   └── 09_schema_design.js
│
├── 📂 data/
│   ├── products.js
│   ├── orders.js
│   └── contacts.js
│
└── README.md
```

---

## 💡 Key Concepts Quick Reference

| Concept | MongoDB | SQL Equivalent |
|---------|---------|----------------|
| Database | Database | Database |
| Collection | Collection | Table |
| Document | Document | Row |
| Field | Field | Column |
| `_id` | ObjectId | Primary Key |

---

## 🛠️ Useful Commands Cheat Sheet

```js
show dbs                          // List all databases
use ecommerce                     // Switch to database
show collections                  // List collections
db.products.insertOne({})         // Insert one document
db.products.insertMany([{}])      // Insert many documents
db.products.find()                // Find all documents
db.products.find().pretty()       // Pretty print results
db.products.countDocuments()      // Count all documents
db.products.drop()                // Delete a collection
db.dropDatabase()                 // Delete current database
```

---

## 👨‍💻 Author

**Learning MongoDB** — Step by step, topic by topic.

> *"The best way to learn is by doing."* 🚀

---

## ⭐ Show Some Love

If you find this helpful, feel free to **star** ⭐ the repository!

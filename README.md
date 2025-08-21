# Quora-Clone (Node.js + Express + EJS + REST API)

A simple **Quora-like CRUD application** built with **Node.js, Express, and EJS** to practice RESTful APIs and backend fundamentals.  
This project demonstrates **Create, Read, Update, Delete (CRUD)** operations using REST principles with server-side rendering.

---

## ✨ Features
- 📌 **CRUD operations** for posts:
  - Create new posts
  - View all posts
  - View individual posts
  - Edit existing posts
  - Delete posts
- 🔑 **Unique Post IDs** generated with [UUID](https://www.npmjs.com/package/uuid)
- 🛠 **Method Override** to support PUT, PATCH, DELETE requests from HTML forms
- 🎨 **EJS Templates** for dynamic rendering
- 📂 Serve static files (CSS, JS, Images) via Express
- ⚡ Development with **Nodemon** (auto-restart server)

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **EJS** (Embedded JavaScript Templates)
- **UUID** (for unique IDs)
- **Method-Override**
- **Nodemon**

---

## 📂 Project Structure
```bash
rest_class/
│
├── views/             # EJS templates (index, new, edit, show)
├── public/            # Static files (CSS, JS, images)
├── index.js           # Main server file
├── package.json       # Dependencies & scripts
└── README.md          # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
git clone https://github.com/your-username/quora-clone.git
cd quora-clone
### 2️⃣ Install Dependencies
npm install
### 3️⃣ Run the Server
nodemon index.js
Server will start at: http://localhost:8080

---

##📌 Routes Overview
```
**Route**         	**Method**                   	**Description**
/posts	            GET	                          Show all posts
/posts/new	        GET	                          Form to create a new post
/posts	            POST                        	Create a new post
/posts/:id	        GET                         	Show a single post in detail
/posts/:id/edit    	GET	                          Form to edit an existing post
/posts/:id	        PATCH	                        Update post content
/posts/:id    	    DELETE	                      Delete a post
```

---

##🎯 Learning Outcomes
- RESTful API design with Express
- Server-side rendering using EJS
- Handling form data and middleware
- CRUD operations in practice

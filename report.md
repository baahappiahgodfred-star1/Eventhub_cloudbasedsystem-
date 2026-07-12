# EventHub – Cloud-Based Web System Design Report

## 1. Introduction

The objective of this project is to design, implement, and deploy a cloud-based web application that addresses a real-world problem. The selected problem is the difficulty of discovering events due to information being scattered across multiple platforms.

## 2. Problem Statement

Many technology, startup, educational, and cultural events are announced through social media pages, websites, and private groups. This fragmentation makes event discovery difficult for users.

A centralized platform is needed to simplify access to event information.

## 3. Proposed Solution

EventHub provides a single platform where users can discover and publish events.

The application enables users to register, log in, create events, and manage their own events through a personalized dashboard.

## 4. System Architecture

The system follows a three-tier architecture:

* Frontend Layer: React.js
* Backend Layer: Node.js and Express.js
* Database Layer: MongoDB Atlas

User requests are handled by the React frontend, processed by the Express API, and stored in MongoDB Atlas.

## 5. Technologies Used

Frontend:

* React.js
* Axios
* React Router

Backend:

* Node.js
* Express.js
* JWT
* bcryptjs

Database:

* MongoDB Atlas

Deployment:

* Render
* Netlify

Version Control:

* Git
* GitHub

## 6. Database Design

The application uses MongoDB as a document-oriented NoSQL database.

User Collection:

* name
* email
* password

Event Collection:

* title
* description
* location
* date
* userId

MongoDB Atlas provides scalability and cloud accessibility.

## 7. Security Implementation

Authentication is implemented using JWT.

Security measures include:

* Password hashing with bcryptjs
* Protected routes
* Environment variables for sensitive data
* Token-based authentication

## 8. Cloud Deployment

Backend deployment is performed on Render.

Frontend deployment is performed on Netlify.

MongoDB Atlas serves as the cloud database.

This architecture ensures accessibility, scalability, and maintainability.

## 9. Challenges Encountered

Several challenges were encountered during development:

* MongoDB connection issues
* JWT authentication configuration
* API routing errors
* Frontend-backend communication issues
* Cloud deployment configuration

These challenges were resolved through debugging and testing.

## 10. Future Improvements

Future versions could include:

* Event categories
* Event images
* Search and filtering
* User profiles
* Email notifications
* Event registration system
* Mobile application

## 11. Conclusion

EventHub  successfully demonstrates the design and deployment of a cloud-based web application using the MERN stack.

The project solves a practical problem by centralizing event information and providing users with a simple platform to create and discover events.

The final solution is scalable, secure, and suitable for future expansion.

# 🔐 JWT-based Authentication Service

A production-ready **JWT authentication system** built with **Spring Boot (Backend)** and **Next.js (Frontend)**, featuring secure session handling, refresh token rotation, Redis-backed tracking, and OTP-based email verification.

---

## ✨ Features

### 🔑 Authentication & Tokens
- JWT **Access & Refresh token** generation
- **Refresh token rotation** (prevents token reuse)
- Immediate **token revocation** support
- JTI-based session validation

### 📧 Email & Security
- OTP-based **account recovery**
- Email-based **rate limiting**
- Secure password hashing

### 🛡️ Security
- HTTPS enabled
- Stateless authentication
- Spring Security filters

---

## 🧩 Tech Stack

### Backend
- **Java 21**
- **Spring Boot**
- Spring Security
- JWT (Access + Refresh Tokens)
- Redis
- PostgreSQL
- SendGrid

### Frontend
- **Next.js (App Router)**
- TypeScript
- Tailwind CSS
- ShadCN UI
- Fetch API

---
# Feed a Stray

A donation platform where users can contribute to feed stray animals. Built with **Next.js 15**, **MongoDB Atlas**, and **Razorpay (Test Mode)**. The platform includes:

* **Admin Dashboard** to configure Razorpay keys
* **User Pages** for public donations
* **Secure Auth** via **Google, GitHub, and Facebook** using NextAuth.js
* **Live donation records** stored in MongoDB

## 🌐 Live Demo

**[Visit Feed a Stray Live](https://feed-a-stray.vercel.app/)**

---

## 🔧 Features

* 🧑‍💻 **Admin Panel** to manage Razorpay keys
* 👥 **User Profiles** at `/[username]` with donation option
* 💸 **Razorpay Payment Gateway** (test mode)
* 🔐 **Secure login** using Google, GitHub, and Facebook
* 🗃️ **MongoDB Atlas** for storing users and payments

---

## 🛠️ Tech Stack

* **Frontend**: Next.js 15 (App Router + Turbopack)
* **Auth**: NextAuth.js
* **Backend**: API Routes & MongoDB Atlas
* **Payment**: Razorpay (test mode)
* **ORM**: Mongoose

---

## 🚀 Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/harshpdsingh/Feed-a-Stray.git
cd feed-a-stray
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env.local`

Create a file named `.env.local` in the root folder and add the following:

```env
# GitHub OAuth
GITHUB_ID=
GITHUB_SECRET=

# Google OAuth
GOOGLE_ID=
GOOGLE_SECRET=

# Facebook OAuth
FACEBOOK_ID=
FACEBOOK_SECRET=

# NextAuth config
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
NEXT_PUBLIC_URL=http://localhost:3000

# MongoDB Atlas
MONGODB_URI=

# Razorpay (Test Mode)
RAZORPAY_ID=
RAZORPAY_SECRET=

# Admin Email (for dashboard access)
ADMIN_EMAIL=
```

> 💡 Get credentials from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), [Google Developer Console](https://console.developers.google.com/), [GitHub Developer Settings](https://github.com/settings/developers), [Facebook for Developers](https://developers.facebook.com/), and [Razorpay Dashboard](https://dashboard.razorpay.com/).

### 4. Start the Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## 🧪 Razorpay Test Mode

* Admin sets Razorpay keys via dashboard
* Users donate via Razorpay popup
* Donations are in **test mode**, use test card:

```
Card Number: 4111 1111 1111 1111
CVV: 123
Expiry: Future date
Name: Any
```

---

## ⭐️ Star This Repo

If you find this project useful, please star it on GitHub ⭐️

---

## 📝 License

This project is licensed under the [The Unlicense](/UNLICENSE).

You are free to use, modify, and distribute this project without restriction.

# 🏡 HomeHaven

A full-stack web application that allows users to find, list, and manage rental homes efficiently.

## 🛠 Tech Stack

* **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
* **Backend**: [Django](https://www.djangoproject.com/)
* **Database**: [MySQL](https://www.mysql.com/)

## 🚀 Features

* User registration and authentication
* Search for available rental properties
* List new rental homes with images and details
* Filter properties by location, price, and availability
* Admin panel for managing listings (via Django)
* Responsive design for mobile and desktop

## 📁 Project Structure

```
/frontend         # Next.js frontend
/backend          # Django backend
/database         # MySQL schema and sample data
```

## ⚙️ Setup Instructions

### Prerequisites

* Node.js ≥ 14
* Python ≥ 3.8
* MySQL Server

---

### 🔧 1. Clone the Repository

```bash
git clone https://github.com/Vyshak-NSC/house-rent.git
cd homehaven
```

---

### 🌐 2. Set Up the Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Access the frontend at `http://localhost:3000`

---

### 🛠️ 3. Set Up the Backend (Django)

```bash
cd ../backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend will run at `http://127.0.0.1:8000`

---

### 🗓️ 4. Configure MySQL

* Create a new MySQL database (e.g., `homehaven`)
* Update `settings.py` with your DB credentials
* Import SQL schema from `/database/schema.sql` if provided

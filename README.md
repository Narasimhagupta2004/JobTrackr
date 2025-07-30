# 🚀 **JobTrackr**

JobTrackr is a **job application management platform** built with the **MERN stack** that allows users to efficiently track their job applications, upload resumes and job descriptions, analyze progress, and organize applications for a smoother career journey.

---

## 📌 **Features**

* 🔐 **User Authentication** (JWT-based Login & Registration)
* 📄 **Add Jobs** with Position, Company, Status, Source, Notes, and Deadlines
* 📂 **Resume & Job Description Uploads** (PDF)
* 📊 **Track Application Status** (Applied, Interview, Rejected, Offer)
* 🔍 **View & Edit Applications**
* 🗑️ **Delete Jobs**
* 🎨 **Responsive UI** built with Material UI (MUI)
* ⚡ **Secure APIs** using JWT authentication middleware

---

## 🛠 **Tech Stack**

**Frontend**:

* React.js
* Material UI
* Axios
* React Router DOM

**Backend**:

* Node.js
* Express.js
* MongoDB with Mongoose
* Multer (file uploads)
* JWT Authentication

---

## 📂 **Folder Structure**

```
JobTrackr/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ **Installation & Setup**

### **1️⃣ Clone the repository**

```bash
git clone https://github.com/yourusername/jobtrackr.git
cd jobtrackr
```

### **2️⃣ Setup Backend**

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
EMAIL_USER=your_mail
EMAIL_PASS=your_password
```

Start the backend server:

```bash
npm start
```

### **3️⃣ Setup Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 **Environment Variables**

Ensure the `.env` file contains:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

```

---

## 🚀 **Deployment**

* **Frontend**: Deployed on Vercel/Netlify
* **Backend**: Deployed on Render/Heroku
* **Database**: MongoDB Atlas

---

## 📸 **Screenshots**

> Add screenshots of Dashboard, Job Form, Job List, and Profile here.

---

## 🤝 **Contributing**

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 **License**

This project is licensed under the MIT License.

---

💼 **Made with ❤️ for job seekers**

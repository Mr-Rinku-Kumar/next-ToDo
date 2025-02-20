Next.js To-Do App

🚀 Overview

This is a simple and efficient To-Do App built using Next.js. It allows users to add, delete, and manage their tasks easily. The app also features Google authentication using NextAuth.js, ensuring a secure and seamless login experience.

✨ Features

✅ Google Authentication (Sign In / Sign Out)

📝 Add, Delete To-Dos

🎨 Responsive UI

☁️ Deployed on Render

📦 State Management with useState

🛠️ Tech Stack

Frontend: Next.js, TypeScript, Tailwind CSS

Authentication: NextAuth.js (Google OAuth)

Backend: JSON Server (or any API for storing tasks)

Deployment: Render, Vercel (Optional)

📸 Screenshots

⚙️ Installation & Setup

Follow these steps to set up the project locally:

1️⃣ Clone the Repository

git clone https://github.com/Mr-Rinku-Kumar/next-ToDo.git cd next-ToDo

2️⃣ Install Dependencies

npm install # or yarn install

3️⃣ Set Up Environment Variables

Create a .env.local file and add your Google OAuth credentials:

NEXTAUTH_URL=http://localhost:3000 GOOGLE_CLIENT_ID=your-client-id GOOGLE_CLIENT_SECRET=your-client-secret

4️⃣ Start the Development Server

npm run dev # or yarn dev

Visit http://localhost:3000 to see the app in action!

🚀 Deployment

You can deploy this project on Vercel or Render easily.

Deploy on Vercel

npm run build vercel deploy

Deploy on Render

Create a New Web Service on Render

Connect your GitHub repository

Set up the build command:

npm install && npm run build

Start command:

npm start

🛠️ Contribution

Feel free to contribute! Fork the repo, create a branch, and submit a PR.

📜 License

This project is licensed under the MIT License.

Developed with ❤️ by Rinku Kumar

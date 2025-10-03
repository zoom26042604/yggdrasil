# 🌳Yggdrasil - Novel story database
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20-brightgreen)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/frontend-Next.js-000000)](https://nextjs.org/)

---

## 📝 Description

**Yggdrasil** is a web app made to make it possible for Novel readers to not get lost in a story because they forgot an information. This app helps readers go through important events in the novels they are reading without being spoiled of future events, and this by adding a filter based on the last chapter they read.


---

## 📖 Features

- 📝 **Current chapter registery**: Track your progress and quickly find where you left off in the novel.
- 🔍 **Search for informations** : Look up chapters, characters and lore elements to instantly get to the information you want.
- ❓ **Suggest additions & modifications** : Ask the support for additional novels to be added to the app or to make changes to existing lore elements for novels.
- 🌳 **Branching story visualization** : explore how narratives diverge and reconnect in a tree-like view.
- (**Chat system**)

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) ⚡, [React](https://reactjs.org/) ⚛️, [TypeScript](https://www.typescriptlang.org/) 📘  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 🌬️  
- **State Management**: To be determined .  
- **API Communication**: To be determined .  
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) 🔐 (planned, if required)  

---

## 📸 Screenshots

*(To be added — placeholders below)*  

![Homepage](/screen/homepage.png)  
*A glimpse at the main dashboard showing tracked novels and chapters.*  

![Tree Visualization](/screen/tree.png)  
*Branching story view illustrating how narratives split and rejoin.*  

![Search Interface](/screen/search.png)  
*Quickly look up characters, lore, or events.*  

---

## ⚙️ Installation

### **Prerequisites**

Make sure you have the following installed:  

- [Node.js](https://nodejs.org/) (v20 or higher) 📦  
- [Git](https://git-scm.com/) 🔧  

### **Setup**

1. **Clone the repository**  

   ```bash
   git clone https://github.com/YourUser/Yggdrasil.git
   cd Yggdrasil
   ```

2. **Install dependecies**

    ```bash
    npm install --force
    ```

3. **Configure environment variables**

    Add a `.env.local` file at the root of the project

    ```env
        NEXT_PUBLIC_API_URL=http://localhost:3000/graphql
      NEXTAUTH_URL=http://api.skycrew.local:8080/graphql
    ```

4. **Start server**

    ```bash
    npm run server
    ```

---

## 👾 Usage

If you don't have the project installed just go to https://Yggdrasil.com in your browser

however if you did clone the repo and now have the project you can execute the previous steps to execute the frontend, then instead of https://Yggdrasil.com go to https://localhost:7976 or https://127.0.0.1:7976

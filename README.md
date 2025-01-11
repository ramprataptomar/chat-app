# Chat Application

## Description
A real-time chat application built with React and Firebase Authentication. This application allows users to sign up, log in, and communicate in real-time using Firebase's powerful backend services. The app is designed to be simple, efficient, and user-friendly, enabling seamless conversations between users.

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

---

## Features
- **Firebase Authentication**: Secure user authentication for sign-up and login.
- **Real-Time Messaging**: Messages are updated in real-time for all users.
- **Clean UI**: Simple and intuitive user interface.
- **Efficient State Management**: Leveraging React's state and context API.

---

## Technologies Used
- **Frontend**: React.js, CSS
- **Authentication**: Firebase Authentication
- **Real-Time Database**: Firebase Firestore
- **State Management Tool**: Zustand

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ramprataptomar/chat-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd chat-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   REACT_APP_API_KEY=your-api-key
   REACT_APP_AUTH_DOMAIN=your-auth-domain
   REACT_APP_PROJECT_ID=your-project-id
   REACT_APP_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_APP_ID=your-app-id
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## Usage
1. Sign up for a new account or log in with an existing account.
2. Start a conversation by sending a message.
3. View messages in real-time as other users send messages.

---

## Screenshots

### Login Page
![image](https://github.com/user-attachments/assets/837a3191-2495-49bb-b99d-bc265eca756e)

### Chat Interface
![image](https://github.com/user-attachments/assets/370df58b-054b-424d-b286-7f0f4ebff8f2)

---

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request to the main branch.

---

## Acknowledgments
- **Firebase**: For providing the authentication and real-time database services.
- **React Community**: For the extensive documentation and tools.
- **OpenAI**: For guidance and inspiration in creating this project.


# Calculator Fullstack App

This is a fullstack calculator application inspired by the CITILZEN CT-9300GW calculator.

## Project Structure

```
calculator-image/
├── backend/
│   ├── server.js         # Node.js Express backend
│   └── history.json      # Calculation history storage
└── frontend/
    ├── index.html        # Calculator UI
    ├── style.css         # Calculator styles
    └── script.js         # Calculator logic and API calls
```

## Setup Instructions

### Backend
1. Navigate to the `backend` folder:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install express cors
   ```
3. Start the backend server:
   ```
   node server.js
   ```
   The backend will run on [http://localhost:3000](http://localhost:3000).

### Frontend
1. Open `frontend/index.html` in your web browser.
2. The calculator will display and interact with the backend for calculation history.

## Features
- Calculator UI and logic (frontend)
- Calculation history saved and loaded from backend
- Simple REST API (backend)

## Notes
- Make sure the backend server is running before using the calculator history feature.
- You can further extend this app with authentication, user accounts, or a database.

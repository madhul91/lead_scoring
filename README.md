# Lead Scoring System

A **MERN stack application** for managing and scoring leads in real-time. This backend API provides endpoints to manage offers, leads, and scoring logic. The app is deployed on [Render](https://lead-scoring-1-350g.onrender.com/).

---

## Features

- REST API built with **Node.js** and **Express**
- **Offer, Lead, and Score management**
- JSON request/response support
- Fully deployable on Render or other Node.js hosting services
- Scalable structure with **controllers**, **routes**, and **services**
- Easy integration with frontend apps

---

## Project Structure
lead_scoring/
├── src/
│ ├── controllers/
│ │ ├── offerController.js
│ │ ├── leadController.js
│ │ └── scoreController.js
│ ├── routes/
│ │ ├── offerRoutes.js
│ │ ├── leadRoutes.js
│ │ └── scoreRoutes.js
│ ├── services/
│ │ ├── aiService.js
│ │ └── ruleService.js
│ └── app.js
├── package.json
└── README.m


## Install Dependencies
-npm install

-Create a .env file in the root and configure environment variables such as Port, API keys, etc.
## Running Locally
-npm run dev   # if you have nodemon for development

-npm start
## API endpoint

| Route        | Method | Description                    |
| ------------ | ------ | ------------------------------ |
| `/offer` | GET    | Get all offers                 |
| `/lead`  | GET    | Get all leads                  |
| `/score` | GET    | Get scoring results            |
| `/`          | GET    | Root route (API running check) |


https://lead-scoring-1-350g.onrender.com/offer




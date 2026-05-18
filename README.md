# Zeroed 💸

A full-stack group expense splitting app. Add expenses, invite friends, and calculate who owes whom with a minimum-transactions algorithm.

**Live demo:** [zeroed-five.vercel.app](https://zeroed-five.vercel.app)

---

## Features

- **Authentication** — JWT-based register and login
- **Groups** — Create expense groups, invite members by email
- **Expenses** — Add and split expenses across group members
- **Smart balancing** — Minimum transactions algorithm calculates the fewest payments needed to settle a group (the same approach used by Splitwise)
- **Settlements** — Mark groups as fully settled
- **Invitations** — Email-based invite flow with accept/decline

---

## Tech Stack

### Backend
- **NestJS** + TypeScript
- **Prisma 7** + **PostgreSQL** (Neon)
- **JWT** + bcrypt
- Deployed on **Railway**

### Frontend
- **React** + TypeScript + **Vite**
- **TanStack Query** + **React Router**
- **Tailwind CSS**
- Deployed on **Vercel**

---

## The Algorithm

When a group has multiple shared expenses, each person ends up with a net balance — either positive (they're owed money) or negative (they owe money).

Zeroed uses a greedy algorithm to settle all debts with the fewest possible transactions. It repeatedly matches the person who is owed the most with the person who owes the most, until all balances reach zero.

```
Example:
  Nastia: +80  →  Ron pays Nastia 60
  Shir:   -40  →  Shir pays Nastia 20
  Dana:   -20  →  (2 transactions to settle the whole group)
  Ron:    -60
```

---

## Getting Started

### Prerequisites
- Node.js 22+
- PostgreSQL database (or a [Neon](https://neon.tech) free account)

### Backend

```bash
cd backend
npm install
```

Create a `.env` file:
```env
DATABASE_URL="your_postgres_connection_string"
JWT_SECRET="your_jwt_secret"
```

Run migrations and start:
```bash
npx prisma migrate dev
npm run start:dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and expects the backend at `http://localhost:3000`.

---

## Project Structure

```
zeroed/
├── backend/
│   ├── src/
│   │   ├── auth/          # JWT auth, register, login
│   │   ├── groups/        # Group CRUD, settlements
│   │   ├── expenses/      # Expense splitting, balance algorithm
│   │   ├── invites/       # Email invite flow
│   │   └── prisma/        # Database service
│   └── prisma/
│       └── schema.prisma  # DB schema
└── frontend/
    └── src/
        ├── api/           # Axios client + API functions
        ├── components/    # Reusable modals
        └── pages/         # Login, Register, Dashboard, Group
```

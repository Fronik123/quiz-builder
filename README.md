# Quiz Builder


Stack: **Next.js** (frontend) + **tailwind** + **NestJS** (backend) + **Prisma ORM** + **PostgreSQL**.

---

## 📦 Installation

### 1. git clone
```bash
git clone https://github.com/Fronik123/quiz-builder.git
cd quiz-builder
```
### 2. Go to the backend and set up dependencies
```bash
 cd backend
 npm install
```
### 3. Add file to root folder .env and and path to database

DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"


### 4. Prisma migrate

```bash
npx prisma migrate dev
```
### 5. Run backend

```bash
npm run start:dev
```

### 6.In another tab open frontned and install dependencies
```bash
 npm install
```

### 7. Add file to root folder .env.local

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

### 8. Run the application

```bash
npm run dev
```






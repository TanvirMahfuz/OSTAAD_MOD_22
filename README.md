**Clone the repository:**

```bash
git clone https://github.com/your-username/project-name.git

```

**Navigate to the project directory:**

```bash
cd student-project
```

**Install dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev

```

**Open your web browser and visit http://localhost:3000 to view the project.**

## API Endpoints

| Method | Endpoint              | Description                                   |
| ------ | --------------------- | --------------------------------------------- |
| POST   | `/api/register`       | Register a new student                        |
| POST   | `/api/login`          | Log in an existing student                    |
| GET    | `/api/profile`        | Retrieve the profile of the logged-in student |
| PUT    | `/api/profile`        | Update the profile of the logged-in student   |
| POST   | `/api/upload`         | Upload a file for the logged-in student       |
| GET    | `/api/file/:fileName` | Retrieve a specific file by name              |
| DELETE | `/api/file/:fileName` | Delete a specific file by name                |

### Authentication

- All routes except `/register` and `/login` require authentication. Use a valid JWT token in the request headers for protected routes.

### Demo request body

```bash
{
"name": "string",
"email": "string",
"password": "string",
"profilePic": "string",
}
```

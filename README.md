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

**Open postman and visit http://localhost:3000 to view the project.**

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

### For congiguration

1.  Create a directory file in the app directory of the project.
2.  Create a file named `config.js` in the app directory.
3.  Add the following code to the `config.js` file and modify as per your requirements:

```bash
export const JWT_SECRET = "your_secret_key";
export const PORT = 3000;
export const MONGO_URI = "YOUR_MONGODB_URI";
export const TOKEN_EXPIRATION = "1d";

```

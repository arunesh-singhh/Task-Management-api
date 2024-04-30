# Task Management System API

This API provides endpoints for managing tasks in a task management system.

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo/task-management-api.git
    ```

2. Install dependencies:

    ```bash
    cd task-management-api
    npm install
    ```

3. Setup Mongodb Databade URL:
   inside .env file copy and paste your mongodb database URL
   ```bash
    MONGODB_URL = mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.c6j8ygu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```
4. Testing:

    ```bash
    npm test
    ```

4. Start the server:

    ```bash
    npm start
    ```

    The server will start running on `http://localhost:3000` by default.

## API Endpoints

### 1. Create a New Task

- **URL:** `/tasks`
- **Method:** `POST`
- **Body Parameters:**
  - `title` (string, required): Title of the task.
  - `description` (string, optional): Description of the task.
  - `status` (string, optional): Status of the task (e.g., "pending", "in progress", "completed").

#### Example Request:

   ```bash
    curl -X POST http://localhost:3000/tasks \
    -H "Content-Type: application/json" \
    -d '{"title": "Task 1", "description": "Description of Task 1", "status": "pending"}'
   ```

### Example Response:
  ```json
    {
      "_id": "609dd16736b8d608bc5e69d2",
      "title": "Task 1",
      "description": "Description of Task 1",
      "status": "pending",
      "creationDate": "2024-05-15T08:00:00.000Z"
    }
  ```

### 2. Retrieve All Tasks

- **URL:** `/tasks`
- **Method:** `GET`

#### Example Request:

   ```bash
    curl http://localhost:3000/tasks
   ```

### Example Response:
  ```json
    [
      {
        "_id": "609dd16736b8d608bc5e69d2",
        "title": "Task 1",
        "description": "Description of Task 1",
        "status": "pending",
        "creationDate": "2024-05-15T08:00:00.000Z"
      },
      {
        "_id": "609dd16e36b8d608bc5e69d3",
        "title": "Task 2",
        "description": "Description of Task 2",
        "status": "completed",
        "creationDate": "2024-05-15T08:00:00.000Z"
      }
    ]
   ```

### 3. Retrieve a Single Task by its ID

- **URL:** `/tasks/:taskId`
- **Method:** `GET`

#### Example Request:

  ```bash
    curl http://localhost:3000/tasks/609dd16736b8d608bc5e69d2
  ```


### Example Response:
  ```json
    {
      "_id": "609dd16736b8d608bc5e69d2",
      "title": "Task 1",
      "description": "Description of Task 1",
      "status": "pending",
      "creationDate": "2024-05-15T08:00:00.000Z"
    }
  ```

### 4. Update a Task by its ID

- **URL:** `/tasks/:taskId`
- **Method:** `PATCH`
- **Body Parameters:**
  - `title` (string): Title of the task.
  - `description` (string): Description of the task.
  - `status` (string): Status of the task.

#### Example Request:

  ```bash
    curl -X PATCH http://localhost:3000/tasks/609dd16736b8d608bc5e69d2 \
    -H "Content-Type: application/json" \
    -d '{"status": "completed"}'
  ```

### Example Response:
  ```json
    {
      "_id": "609dd16736b8d608bc5e69d2",
      "title": "Task 1",
      "description": "Description of Task 1",
      "status": "completed",
      "creationDate": "2024-05-15T08:00:00.000Z"
    }
   ```

### 5. Delete a Task by its ID

- **URL:** `/tasks/:taskId`
- **Method:** `DELETE`

#### Example Request:

   ```bash
    curl -X DELETE http://localhost:3000/tasks/609dd16736b8d608bc5e69d2
   ```


### Example Response:
  ```json
    {
      "_id": "609dd16736b8d608bc5e69d2",
      "title": "Task 1",
      "description": "Description of Task 1",
      "status": "completed",
      "creationDate": "2024-05-15T08:00:00.000Z"
    }
  ```
Feel free to customize and expand this README file according to your project's specific requirements and features.

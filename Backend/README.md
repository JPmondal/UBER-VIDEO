# User Registration & Authentication API Documentation

## POST `/users/register`

Registers a new user in the system.

---

### **Description**

This endpoint allows a new user to register by providing their first name, last name, email, and password. The password is securely hashed before being stored in the database. On successful registration, a JWT authentication token and the user object are returned.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**

- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Minimum 6 characters.

---

### **Responses**

#### **201 Created**

- **Description:** User registered successfully.
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### **422 Unprocessable Entity**

- **Description:** Validation failed (e.g., missing fields, invalid email, short password).
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

#### **500 Internal Server Error**

- **Description:** Server error or database failure.
- **Body:**
  ```json
  {
    "error": "Internal server error"
  }
  ```

---

### **Example Request**

```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": { "firstname": "Alice", "lastname": "Smith" },
  "email": "alice@example.com",
  "password": "securepassword"
}'
```

---

### **Notes**

- All required fields must be provided in the request body.
- The password is never returned in the response.
- The returned token can be used for authenticated requests.

---

## POST `/users/login`

Authenticates a user and returns a JWT token upon successful login.

---

### **Description**

This endpoint allows an existing user to log in by providing their email and password. If the credentials are valid, a JWT authentication token and the user object are returned.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**
- `email` (string, required): Must be a valid email address.
- `password` (string, required): Must match the password used during registration.

---

### **Responses**

#### **200 OK**
- **Description:** User authenticated successfully.
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### **401 Unauthorized**
- **Description:** Invalid email or password.
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### **422 Unprocessable Entity**
- **Description:** Validation failed (e.g., missing fields, invalid email).
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field",
        "location": "body"
      }
    ]
  }
  ```

#### **500 Internal Server Error**
- **Description:** Server error or database failure.
- **Body:**
  ```json
  {
    "error": "Internal server error"
  }
  ```

---

### **Example Request**

```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}'
```

---

### **Notes**
- Both `email` and `password` are required fields.
- The returned token can be used for authenticated requests.
- Ensure the email and password match the credentials used during registration.

---

# User Profile & Logout API Documentation

## GET `/users/profile`

Fetches the profile of the currently authenticated user.

---

### **Description**

This endpoint retrieves the profile information of the logged-in user. The request must include a valid JWT token in the `Authorization` header or as a cookie.

---

### **Headers**

- `Authorization` (string, optional): Bearer token for authentication (if not using cookies).

---

### **Responses**

#### **200 OK**
- **Description:** User profile retrieved successfully.
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
  }
  ```

#### **401 Unauthorized**
- **Description:** Token is missing, invalid, or blacklisted.
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### **500 Internal Server Error**
- **Description:** Server error or database failure.
- **Body:**
  ```json
  {
    "error": "Internal server error"
  }
  ```

---

### **Example Request**

```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer <jwt_token>"
```

---

### **Notes**
- A valid JWT token is required to access this endpoint.
- The token must not be blacklisted.

---

## GET `/users/logout`

Logs out the currently authenticated user by blacklisting their JWT token.

---

### **Description**

This endpoint logs out the user by clearing the authentication token from cookies and blacklisting it in the database. Once logged out, the token cannot be used again.

---

### **Headers**

- `Authorization` (string, optional): Bearer token for authentication (if not using cookies).

---

### **Responses**

#### **200 OK**
- **Description:** User logged out successfully.
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### **401 Unauthorized**
- **Description:** Token is missing, invalid, or blacklisted.
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

#### **500 Internal Server Error**
- **Description:** Server error or database failure.
- **Body:**
  ```json
  {
    "error": "Internal server error"
  }
  ```

---

### **Example Request**

```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer <jwt_token>"
```

---

### **Notes**
- A valid JWT token is required to log out.
- The token is blacklisted and cannot be reused after logout.
- If using cookies, the token is cleared automatically.



# Election Management System Backend

A Spring Boot backend application for an Election Management System with comprehensive voter registration, volunteer management, and administrative features.

## Features

- **User Authentication & Authorization**: JWT-based authentication with role-based access control
- **Voter Management**: Complete voter registration and details management
- **Volunteer System**: Registration and management of election volunteers
- **Security**: SHA-256 password encryption and JWT token-based authentication
- **API Documentation**: Swagger/OpenAPI integration
- **Global Exception Handling**: Centralized error handling across the application

## Technology Stack

- **Framework**: Spring Boot 3.2.0
- **Database**: MySQL
- **Security**: Spring Security with JWT
- **Documentation**: Swagger/OpenAPI 3
- **Build Tool**: Maven
- **Java Version**: 17

## Project Structure

```
src/main/java/com/sunbeam/
├── config/                 # Configuration classes
│   ├── CorsConfig.java
│   └── PasswordConfig.java
├── controller/             # REST Controllers
│   ├── UserController.java
│   ├── VoterDetailsController.java
│   └── VolunteerController.java
├── dao/                    # Data Access Objects (JPA Repositories)
├── dto/                    # Data Transfer Objects
├── entities/               # JPA Entities
├── exception/              # Custom Exceptions and Global Exception Handler
├── security/               # Security Configuration and JWT Utilities
└── service/                # Service Layer (Interfaces and Implementations)
```

## Database Schema

The application supports the following main entities:
- **Users**: System users with roles (ADMIN, VOTER)
- **Voter Details**: Comprehensive voter information
- **Address**: Voter address information
- **Applications**: Voter registration applications
- **Complaints**: Voter complaints system
- **Notifications**: System notifications
- **Volunteer**: Election volunteer management
- **Admin**: Administrative user details
- **Voter History**: Voting history tracking
- **Education Content**: Educational materials

## Setup Instructions

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- MySQL 8.0+

### Database Setup
1. Create a MySQL database named `election_db`
2. Update database credentials in `application.properties`

### Running the Application
1. Clone the repository
2. Navigate to the project directory
3. Run the following commands:

```bash
mvn clean install
mvn spring-boot:run
```

The application will start on `http://localhost:8080/api`

## API Documentation

Once the application is running, access the Swagger UI at:
`http://localhost:8080/api/swagger-ui.html`

## Configuration

### Database Configuration
Update `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/election_db
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### JWT Configuration
```properties
jwt.secret.key=your_secret_key_here
jwt.expiration.time=86400000
```

## API Endpoints

### Authentication
- `POST /api/users/signup` - User registration
- `POST /api/users/signin` - User login

### User Management
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/{id}` - Get user by ID
- `PUT /api/users/{id}` - Update user
- `DELETE /api/users/{id}` - Delete user

### Voter Details
- `POST /api/voter-details` - Create voter details
- `GET /api/voter-details/{id}` - Get voter details
- `PUT /api/voter-details/{id}` - Update voter details

### Volunteers
- `POST /api/volunteers` - Register as volunteer (Public)
- `GET /api/volunteers` - Get all volunteers (Admin only)
- `GET /api/volunteers/role?role=ROLE_NAME` - Get volunteers by role

## Security Features

- **Password Encryption**: SHA-256 hashing
- **JWT Authentication**: Stateless authentication
- **Role-based Authorization**: Admin and Voter roles
- **CORS Support**: Cross-origin request handling
- **Global Exception Handling**: Centralized error responses

## Development Notes

- No lambda expressions or method references used (as per requirements)
- SHA-256 password encryption implemented
- Comprehensive validation using Bean Validation
- RESTful API design principles followed
- Proper separation of concerns with layered architecture

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.


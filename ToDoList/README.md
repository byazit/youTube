# 📝 Todo Master

A modern, feature-rich todo list application built with Node.js, React.js, and PostgreSQL. This app showcases a full-stack implementation with containerization, featuring a beautiful gradient UI and smooth animations.

## ✨ Features

- 🎯 **Task Management**: Add, complete, and delete todos with confirmation dialogs
- 📊 **Real-time Statistics**: Track total and completed tasks
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive**: Works seamlessly on desktop and mobile devices
- ⚡ **Real-time Updates**: Instant synchronization between frontend and backend
- 🐳 **Containerized**: Easy deployment with Docker/Podman
- 🔒 **Data Persistence**: PostgreSQL database for reliable storage

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **pg** - PostgreSQL client
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling with gradients and animations

### DevOps
- **Docker/Podman** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
nodejs-dynamic/
├── 📂 server/
│   └── 📄 index.js              # Express backend server with API endpoints
├── 📂 client/
│   ├── 📂 src/
│   │   ├── 📄 App.js           # Main React component with todo logic
│   │   ├── 📄 App.css          # Modern gradient styling
│   │   └── 📄 index.js         # React entry point
│   ├── 📂 public/
│   │   └── 📄 index.html       # HTML template
│   └── 📄 package.json         # Frontend dependencies
├── 📄 package.json              # Backend dependencies and scripts
├── 📄 podman-compose.yml        # Container orchestration
├── 📄 Dockerfile                # Backend container configuration
├── 📄 .env                      # Environment variables
├── 📄 .gitignore                # Git ignore rules
└── 📄 README.md                 # This file
```

## 🚀 Quick Start

### Prerequisites
- [Podman](https://podman.io/) or [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (for local development)

### Using Podman Compose (Recommended)
```bash
# Clone or navigate to the project directory
cd nodejs-dynamic

# Start all services
podman-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
# PostgreSQL: localhost:5432
```

### Local Development
```bash
# Install dependencies
npm run install-all

# Start backend server
npm run server

# Start frontend (in another terminal)
npm run client

# Or run both concurrently
npm run dev
```

## 📡 API Documentation

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/todos` | Retrieve all todos | - |
| `POST` | `/api/todos` | Create a new todo | `{ "task": "string" }` |
| `PUT` | `/api/todos/:id` | Update todo status | `{ "completed": boolean }` |
| `DELETE` | `/api/todos/:id` | Delete a todo | - |

### Database Schema
```sql
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🎨 UI Components

### Header
- Gradient background with app title and tagline
- Responsive design with shadow effects

### Main Content
- **Statistics Bar**: Shows total and completed tasks
- **Todo Form**: Input field with gradient add button
- **Todo List**: Color-coded items with hover effects
- **Empty State**: Friendly message when no todos exist

### Footer
- Gradient background with motivational message
- Copyright and attribution

### Interactive Elements
- ✅ Checkbox to toggle completion status
- 🗑️ Delete button with confirmation dialog
- ➕ Add button with hover animations
- 🎯 Smooth transitions and micro-interactions

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=todoapp
DB_USER=postgres
DB_PASSWORD=password

# Frontend Configuration
REACT_APP_API_URL=http://localhost:5000
```

## 🐳 Container Details

### Services
- **postgres**: PostgreSQL 15 database
- **backend**: Node.js API server
- **frontend**: React development server

### Volumes
- `postgres_data`: Persistent database storage

### Networks
- `todo-network`: Internal communication between containers

## 🧪 Testing

```bash
# Run backend tests
cd server && npm test

# Run frontend tests
cd client && npm test
```

## 📝 Development Notes

### Backend Features
- Express.js server with CORS enabled
- PostgreSQL connection with error handling
- Automatic table creation on startup
- RESTful API endpoints
- Environment-based configuration

### Frontend Features
- React functional components with hooks
- Axios for API communication
- State management with useState and useEffect
- Responsive CSS with gradients
- Form validation and user feedback
- Confirmation dialogs for destructive actions

### Database Features
- Auto-incrementing primary keys
- Timestamp tracking
- Boolean completion status
- Proper indexing for performance

## 🚀 Deployment

### Production Build
```bash
# Build frontend
cd client && npm run build

# Use production-ready containers
podman-compose -f docker-compose.prod.yml up -d
```

### Environment Variables for Production
- Use strong database passwords
- Configure proper CORS origins
- Set up SSL/TLS certificates
- Configure reverse proxy (nginx)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React.js team for the amazing UI library
- Express.js for the robust backend framework
- PostgreSQL for the reliable database solution
- Podman/Docker for containerization technology

---

**💪 Stay productive | Made with ❤️ | © 2026 Todo Master**
# Advertisement Backend API

## Overview
This is a Node.js backend API for managing advertisements. It provides endpoints to fetch dropdown options and create advertisements with file uploads and authorization.

## Folder Structure
- `src/`
  - `app.js` - Main application entry point
  - `routes/` - API route definitions
  - `controllers/` - Route handlers
  - `middlewares/` - Middleware for auth and file upload
  - `models/` - Data models and static data

## Setup and Run

1. Install dependencies:
```
npm install
```

2. Start the server:
```
npm run start
```
or for development with auto-reload:
```
npm run dev
```

3. The server runs on port 3000 by default.

## API Endpoints

### GET /api/dropdown-options
Returns dropdown options for various advertisement fields.

### POST /api/advertisements
Creates a new advertisement.

- Requires `Authorization: Bearer <token>` header.
- Accepts `multipart/form-data` with fields:
  - `ad_type_id`
  - `content` (JSON string with `description`, `ad_element_id`, `element_details`)
  - `targeting` (JSON string with `age_group_ids`, `interest_ids`, `location_ids`)
  - `ad_model_id`
  - `action` ("Save Draft" or "Preview")
  - `file` (image or video file)

## Notes
- JWT secret is hardcoded as 'your_jwt_secret' in `authMiddleware.js` for demo purposes.
- File uploads are stored in memory; no persistent storage implemented.
- Video duration validation is simulated.

# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Songs

- `GET /api/songs`
- `GET /api/songs/:id`
- `POST /api/songs`
- `DELETE /api/songs/:id`

### Comments

- `GET /api/songs/:id/comments`
- `POST /api/songs/:id/comments`
- `DELETE /api/comments/:id`

### Likes

- `GET /api/users/:id/likes`
- `POST /api/songs/:id/likes`
- `DELETE /api/likes/:id`

### Profiles

- `GET /api/users/:id`
- `PATCH /api/users/:id`

### Genres

- `GET /api/genres`

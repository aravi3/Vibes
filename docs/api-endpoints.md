# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Songs

- `GET /api/songs`
- `GET /api/songs/:id`
- `POST /api/songs/:id`
- `PATCH /api/songs/:id`
- `DELETE /api/notes/:id`

### Comments

- `GET /api/songs/:id/comments`
- `POST /api/songs/:id/comments`
- `PATCH /api/songs/:id/comments`
- `DELETE /api/songs/:id/comments`

### Likes

- `GET /api/songs/:id/likes`
- `POST /api/songs/:id/likes`
- `DELETE /api/songs/:id/likes`

### Profiles

- `GET /api/users/:id`
- `POST /api/users/:id`
- `PATCH /api/users/:id`
- `DELETE /api/users/:id`

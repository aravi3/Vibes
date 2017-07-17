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
- `POST /api/songs`
- `PATCH /api/songs/:id`
- `DELETE /api/songs/:id`

### Comments

- `GET /api/songs/:id/comments`
- `POST /api/songs/:id/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

### Likes

- `POST /api/songs/:id/like`
- `DELETE /api/songs/:id/like`

### Profiles

- `GET /api/users/:id`
- `PATCH /api/users/:id`
- `DELETE /api/users/:id`

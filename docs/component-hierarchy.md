## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Navbar

**ProfileContainer**
 - ProfileHeader
 - ProfileBody
  * UserSongIndex

**LikesContainer**
 - LikeIndex

**SongsContainer**
 - SongIndex

**SongsDetailContainer**

**NewSongContainer**
- NewSong

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/users/:userId" | "ProfileContainer" |
| "/home/likes" | "LikesContainer" |
| "/songs" | "SongsContainer" |
| "/songs/:songId" | "SongsDetailContainer" |
| "/songs/new" | "NewSongContainer" |

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

**NewSongContainer**
- NewSong

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/profile" | "ProfileContainer" |
| "/home/songs/:songId/:userId/profile" | "ProfileContainer" |
| "/home/likes" | "LikesContainer" |
| "/home/songs" | "SongsContainer" |
| "/home/songs/:songId" | "SongsContainer" |
| "/home/songs/new-song" | "NewSongContainer" |

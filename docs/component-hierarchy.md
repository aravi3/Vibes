## Component Hierarchy

**SessionFormContainer**
 - SessionForm

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

**NavbarContainer**

## Routes

|Path   | Component   |
|-------|-------------|
| "/login" | "SessionFormContainer" |
| "/signup" | "SessionFormContainer" |
| "/home" | "HomeContainer" |
| "/users/:userId" | "ProfileContainer" |
| "/liked" | "SongsContainer" |
| "/songs" | "SongsContainer" |
| "/songs/:songId" | "SongsDetailContainer" |
| "/songs/new" | "NewSongContainer" |

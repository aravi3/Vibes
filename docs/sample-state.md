```js
{
  users: {
    entities: {
      '1': {
        id: 1,
        username: "blah"
      }
    },
    currentUser: {
      id: 1,
      likes: [1, 4, 5]
    }
  },
  songs: {
    entities: {
      '1': {
        id: 1,
        song: "blah",
        user_id: 1,
        title: "blah",
        artist: "blah",
        genre: "blah",
        image: "blah"
      }
    },
    currentSong: 1
  },
  comments: {
      '1': {
        id: 1,
        body: "blah",
        user_id: 1,
        song_id: 1
      }
  },
  profile: {
    id: 1,
    user_id: 1
    image: "blah",
    description: "blah"
  },
  genres: {
    id: 1,
    name: "blah"
  },
  errors: []
}
```

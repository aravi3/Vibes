# Vibes

[Vibes live][heroku]

[heroku]: https://vibes21.herokuapp.com/#/

Vibes is a full-stack music management application inspired by SoundCloud. It uses
React.js with a Redux architecture on the frontend and Ruby on Rails in conjunction
with a PostgreSQL database on the backend.

## Features & Implementation

### Music Management and Personalization

Users can upload song files and an associated image to Vibes. In the backend, song
and image files are stored using Amazon Web Service's cloud service. The paperclip
gem takes care of redirecting file uploads to AWS.

Users can also create custom profiles with images and descriptions that will allow others in
the community to see, play, and like their songs. Each user also has their own "Likes"
playlist, which houses all of the songs that he or she has liked.

In config/application.rb, I specified the AWS keys and bucket for paperclip so
that it can redirect storage of multimedia files to the appropriate location in
the cloud:

```ruby
config.paperclip_defaults = {
  :s3_host_name => "s3-#{ENV["s3_region"]}.amazonaws.com",
  :storage => :s3,
  :s3_credentials => {
    :bucket => ENV["s3_bucket"],
    :access_key_id => ENV["s3_access_key_id"],
    :secret_access_key => ENV["s3_secret_access_key"],
    :s3_region => ENV["s3_region"]
  }
}
```

In my SongIndex React component, I initialize a local state with 2 keys:
`filteredSongs` and `type`. I populate `filteredSongs` with the appropriate tracks
depending on whether the user wishes to see all songs, liked songs, or songs that
match their search query. I toggle the `type` key between the values `all`,
`liked`, and `search` so that I know the appropriate header to display.

```javascript
this.state = {
  filteredSongs: [],
  type: "all"
}
```

The following is the code I use to select only the logged in user's liked songs
from the total list of songs. I pull likedIds for the current user from the
database.

```javascript
const filteredSongs = this.props.songs.filter(song => {
  return likedIds.includes(song.id);
})
```

### Audio Persistence

If a user clicks play on a song, an audio bar will appear at the bottom that will
then persist throughout the user's time at the website. If a user visits the song
show page, however, there is a separate audio component that only lives as long as
the user stays on the show page.

The following is the state shape of the songs reducer. The audio bar component
watches `currentSong` to know when to render:

```js
const initialState = {
  entities: {},
  currentSong: undefined
}
```

If `currentSong` exists, then the audio bar component will render. If not, an
empty `span` will render:

```javascript
if (this.props.currentSong) {
  return this.renderAudioPlayer();
}
else {
  return (<span></span>);
}
```

### Search Functionality

There is a search bar available on the navigation menu, which persists throughout
the website. This way, users can quickly find songs they are looking for. The results
are dynamically filtered after each keystroke. If the bar is cleared, the user will
be returned to the page they started searching from.

I use the same aforementioned local state in the SongIndex component to set
the `filteredSongs` array. I simply use the `includes` function to filter the
list of songs by the query:

```javascript
const filteredSongs = this.props.songs.filter(song => {
  return (
    song.title.toLowerCase().includes(this.props.query) ||
    song.artist.toLowerCase().includes(this.props.query)
  )
})
```

If the user clears the search bar after it having been populated a keystroke prior,
then the user will be taken back to their starting page:

```javascript
if (nextProps.query === "" && this.props.query !== "") {
  this.props.history.goBack();
}
```

## Future Directions for the Project

In addition to the features that have been implemented, I plan to add
more features in the future. The following 2 features are next steps for Vibes:

### Upcoming Shows

It would be nice to be able to see a list of upcoming shows near the user that are
put on by artists that they have liked. I plan to use the user's device's current
coordinates and the Google Maps API to implement this.

### Playlists

Currently, there is a single playlist: songs that the user has liked. I plan to
allow users to create playlists and separate their liked songs into different
buckets for better management.

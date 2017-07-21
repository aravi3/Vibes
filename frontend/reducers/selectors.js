export const selectLoggedIn = (users) => {
  return Boolean(users.currentUser.username);
};

export const selectAllGenres = (genres) => {
  return Object.values(genres);
};

export const selectAllSongs = (songs) => {
  return Object.values(songs);
};

export const selectPlaylist = (songs, currentSong) => {
  let firstSong = [];
  let remainder = [];

  if (currentSong) {
    selectAllSongs(songs).forEach(song => {
      if (song.id === currentSong) {
        firstSong.push({
          name: song.title,
          src: song.track
        });
      }
    });

    selectAllSongs(songs).forEach(song => {
      if (song.id !== currentSong) {
        remainder.push({
          name: song.title,
          src: song.track
        });
      }
    });
  }

  return firstSong.concat(remainder);
};

export const selectAllComments = (comments) => {
  return Object.values(comments);
};

export const selectAllUsers = (users) => {
  return Object.values(users);
};

export const fetchAllSongs = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/songs'
  });
};

export const fetchSong = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/songs/${id}`
  });
};


export const createSong = (song) => {
  return $.ajax({
    method: 'POST',
    url: '/api/songs',
    dataType: 'JSON',
    data: {
      song: {
        url: song.url,
        user_id: song.user_id,
        genre_id: song.genre_id,
        title: song.title,
        artist: song.artist,
        image: song.image
      }
    }
  });
};

export const deleteSong = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${id}`
  });
};

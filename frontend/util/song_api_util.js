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
    contentType: false,
    processData: false,
    data: song
  });
};

export const deleteSong = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${id}`
  });
};

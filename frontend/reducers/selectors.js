export const selectLoggedIn = (users) => {
  return Boolean(users.currentUser.username);
};

export const selectAllGenres = (genres) => {
  return Object.values(genres);
};

export const selectAllSongs = (songs) => {
  return Object.values(songs);
};

export const selectAllComments = (comments) => {
  return Object.values(comments);
};

export const selectAllUsers = (users) => {
  return Object.values(users);
};

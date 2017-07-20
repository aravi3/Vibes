export const selectLoggedIn = (users) => {
  return Boolean(users.currentUser.username);
};

export const selectAllGenres = (genres) => {
  return Object.values(genres);
};

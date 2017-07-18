export const selectLoggedIn = (users) => {
  return Boolean(users.currentUser.username);
};

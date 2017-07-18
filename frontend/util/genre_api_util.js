export const fetchAllGenres = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/genres'
  });
};

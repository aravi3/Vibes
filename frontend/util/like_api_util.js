export const createLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: `/api/likes`,
    dataType: 'JSON',
    data: {
      like: {
        user_id: like.user_id,
        song_id: like.song_id
      }
    }
  });
};

export const fetchUserLikes = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/likes`
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  });
};

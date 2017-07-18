export const createLike= (like) => {
  return $.ajax({
    method: 'POST',
    url: `/api/songs/${like.song_id}/likes`,
    dataType: 'JSON',
    data: {
      like: {
        user_id: like.user_id,
        song_id: like.song_id
      }
    }
  });
};

export const deleteLike = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${id}`
  });
};

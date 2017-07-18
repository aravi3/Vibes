export const fetchAllComments = (songId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/songs/${songId}/comments`
  });
};

export const createComment = (comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/songs/${comment.song_id}/comments`,
    dataType: 'JSON',
    data: {
      comment: {
        body: comment.body,
        user_id: comment.user_id,
        song_id: comment.song_id
      }
    }
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  });
};

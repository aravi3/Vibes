export const fetchProfile = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};


export const editProfile = (profile) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${profile.user_id}`,
    dataType: 'JSON',
    data: {
      profile: {
        user_id: profile.user_id,
        profile_img: profile.profile_img,
        cover_img: profile.cover_img,
        description: profile.description
      }
    }
  });
};

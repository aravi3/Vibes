User.destroy_all
Song.destroy_all
Profile.destroy_all
Like.destroy_all
Genre.destroy_all
Comment.destroy_all

user1 = User.create!(username: "GuestUser", email: "guest@demo.com", password: "demoaccount")
user2 = User.create!(username: "GuestUser2", email: "guest2@demo.com", password: "demoaccount2")
user3 = User.create!(username: "GuestUser3", email: "guest3@demo.com", password: "demoaccount3")
user4 = User.create!(username: "GuestUser4", email: "guest4@demo.com", password: "demoaccount4")
user5 = User.create!(username: "GuestUser5", email: "guest5@demo.com", password: "demoaccount5")

profile1 = Profile.create!(user_id: user1.id, profile_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934024/prof-pic_dgrkzf.jpg", cover_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934040/cover-pic_o9dxb3.jpg", description: "Demo account for Vibes. Feel free to update the profile details!")
profile2 = Profile.create!(user_id: user2.id, profile_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934024/prof-pic_dgrkzf.jpg", cover_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934040/cover-pic_o9dxb3.jpg", description: "Demo account for Vibes. Feel free to update the profile details!")
profile3 = Profile.create!(user_id: user3.id, profile_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934024/prof-pic_dgrkzf.jpg", cover_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934040/cover-pic_o9dxb3.jpg", description: "Demo account for Vibes. Feel free to update the profile details!")
profile4 = Profile.create!(user_id: user4.id, profile_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934024/prof-pic_dgrkzf.jpg", cover_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934040/cover-pic_o9dxb3.jpg", description: "Demo account for Vibes. Feel free to update the profile details!")
profile5 = Profile.create!(user_id: user5.id, profile_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934024/prof-pic_dgrkzf.jpg", cover_img: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500934040/cover-pic_o9dxb3.jpg", description: "Demo account for Vibes. Feel free to update the profile details!")


genre1 = Genre.create!(name: "Electronic")
genre2 = Genre.create!(name: "Hip-Hop")
genre3 = Genre.create!(name: "Folk")

song1 = Song.create!(user_id: user1.id, genre_id: genre3.id, title: "Cotton Eye Joe", artist: user1.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500663110/cotton_eye_joe_xhtcoe.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500663114/cotton_eye_joe_hwsi9m.mp3")
song2 = Song.create!(user_id: user2.id, genre_id: genre1.id, title: "Feather", artist: user2.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670653/feather_t1ahuq.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503542/feather_y9yn2r.mp3")
song3 = Song.create!(user_id: user3.id, genre_id: genre3.id, title: "Half Moon Rising", artist: user3.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670662/half_moon_rising_dhug9l.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503556/half_moon_rising_qk1m7e.mp3")
song4 = Song.create!(user_id: user4.id, genre_id: genre1.id, title: "Lighthouse", artist: user4.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670672/lighthouse_ml2vxl.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503562/lighthouse_nzhwgm.mp3")
song5 = Song.create!(user_id: user5.id, genre_id: genre3.id, title: "Live And Die", artist: user5.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670679/live_and_die_omxfga.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503568/live_and_die_meitsv.mp3")
song6 = Song.create!(user_id: user1.id, genre_id: genre3.id, title: "Lost In My Mind", artist: user1.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670683/lost_in_my_mind_rykenj.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503574/lost_in_my_mind_fo2myf.mp3")
song7 = Song.create!(user_id: user2.id, genre_id: genre2.id, title: "Million Bucks", artist: user2.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670688/million_bucks_vtopru.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503580/million_bucks_uomnoa.mp3")
song8 = Song.create!(user_id: user3.id, genre_id: genre2.id, title: "Not Afraid", artist: user3.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670693/not_afraid_n7rabs.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503585/not_afraid_v353py.mp3")
song9 = Song.create!(user_id: user4.id, genre_id: genre1.id, title: "Paris", artist: user4.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670700/paris_gevl57.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503590/paris_xtnfqq.mp3")
song10 = Song.create!(user_id: user5.id, genre_id: genre3.id, title: "Rivers And Roads", artist: user5.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670701/rivers_and_roads_frahyz.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503596/rivers_and_roads_rbtq7m.mp3")
song11 = Song.create!(user_id: user1.id, genre_id: genre1.id, title: "Sway", artist: user1.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670706/sway_pie4ne.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503602/sway_pguyrf.mp3")
song12 = Song.create!(user_id: user2.id, genre_id: genre2.id, title: "Switch", artist: user2.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670712/switch_vg6b3n.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503606/switch_amaud7.mp3")
song13 = Song.create!(user_id: user3.id, genre_id: genre1.id, title: "This Is What You Came For", artist: user3.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670713/this_is_what_you_came_for_g8xvi6.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500671381/this_is_what_you_came_for_jfao57.mp3")
song14 = Song.create!(user_id: user4.id, genre_id: genre2.id, title: "Work Out", artist: user4.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670718/workout_ee9tmv.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503615/workout_negjo2.mp3")
song15 = Song.create!(user_id: user5.id, genre_id: genre2.id, title: "Yeah", artist: user5.username, image: "https://res.cloudinary.com/dnj5rmvun/image/upload/v1500670724/yeah_yewjn4.jpg", track: "https://res.cloudinary.com/dnj5rmvun/video/upload/v1500503619/yeah_ssbmng.mp3")

like1 = Like.create!(user_id: user1.id, song_id: song2.id)
like2 = Like.create!(user_id: user2.id, song_id: song2.id)
like3 = Like.create!(user_id: user3.id, song_id: song2.id)
like4 = Like.create!(user_id: user4.id, song_id: song2.id)
like5 = Like.create!(user_id: user5.id, song_id: song2.id)
like6 = Like.create!(user_id: user1.id, song_id: song10.id)
like7 = Like.create!(user_id: user2.id, song_id: song10.id)
like8 = Like.create!(user_id: user3.id, song_id: song10.id)
like9 = Like.create!(user_id: user4.id, song_id: song10.id)
like10 = Like.create!(user_id: user5.id, song_id: song10.id)
like11 = Like.create!(user_id: user3.id, song_id: song4.id)
like12 = Like.create!(user_id: user5.id, song_id: song4.id)
like13 = Like.create!(user_id: user2.id, song_id: song4.id)
like14 = Like.create!(user_id: user1.id, song_id: song4.id)
like15 = Like.create!(user_id: user4.id, song_id: song11.id)
like16 = Like.create!(user_id: user2.id, song_id: song11.id)
like17 = Like.create!(user_id: user5.id, song_id: song11.id)
like18 = Like.create!(user_id: user1.id, song_id: song12.id)
like19 = Like.create!(user_id: user3.id, song_id: song12.id)
like20 = Like.create!(user_id: user4.id, song_id: song12.id)

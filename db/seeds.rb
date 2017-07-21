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

genre1 = Genre.create!(name: "Electronic")
genre2 = Genre.create!(name: "Hip-Hop")
genre3 = Genre.create!(name: "Folk")

song1 = Song.create!(
  user_id: user1.id,
  genre_id: genre3.id,
  title: "Cotton Eye Joe",
  artist: user1.username,
  image: File.new("/Users/arvindravi/Desktop/Songs/CottonEyeJoe/cotton_eye_joe.jpg"),
  track: File.new("/Users/arvindravi/Desktop/Songs/CottonEyeJoe/cotton_eye_joe.mp3")
)

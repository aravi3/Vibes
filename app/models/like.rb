class Like < ApplicationRecord
  validates :user_id, :song_id, presence: true
  validates :user_id, uniqueness: {
    scope: :song_id,
    message: "User can only like given song once"
  }
end

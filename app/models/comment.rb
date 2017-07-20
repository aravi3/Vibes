class Comment < ApplicationRecord
  validates :body, :user_id, :song_id, presence: true
end

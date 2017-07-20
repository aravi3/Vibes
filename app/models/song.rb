class Song < ApplicationRecord
  validates :url, :title, :artist, presence: true
  validates :user_id, :genre_id, presence: true
end

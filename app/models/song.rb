class Song < ApplicationRecord
  validates :track, :title, :user_id, :image, :artist, :genre_id, presence: true
  validates :title, length: { maximum: 40 }

  has_attached_file :image, presence: true
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :image, less_than: 3.megabytes

  has_attached_file :track, presence: true
  validates_attachment_content_type :track, content_type: /\Aaudio\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :track, less_than: 50.megabytes

  belongs_to :user
  has_many :comments
  has_many :likes
end

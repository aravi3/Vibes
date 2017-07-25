class Profile < ApplicationRecord
  validates :user_id, presence: true, uniqueness: true
  validates :profile_img, :cover_img, presence: true

  has_attached_file :profile_img, presence: true,
    :styles => {
      :small => "30x30>"
  }

  validates_attachment_content_type :profile_img, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :profile_img, less_than: 3.megabytes

  has_attached_file :cover_img, presence: true
  validates_attachment_content_type :cover_img, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :cover_img, less_than: 3.megabytes

  belongs_to :user
end

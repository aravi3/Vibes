class AddAttachmentCoverImgToProfiles < ActiveRecord::Migration
  def self.up
    change_table :profiles do |t|
      t.attachment :cover_img
    end
  end

  def self.down
    remove_attachment :profiles, :cover_img
  end
end

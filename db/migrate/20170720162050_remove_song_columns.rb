class RemoveSongColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :audio_file
    remove_column :songs, :image_file
    remove_column :songs, :audio_content
    remove_column :songs, :audio_size
    remove_column :songs, :image_content
    remove_column :songs, :image_size
  end
end

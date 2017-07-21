class AddSongColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :songs, :audio_content, :string
    add_column :songs, :audio_size, :integer
    add_column :songs, :image_content, :string
    add_column :songs, :image_size, :integer
    rename_column :songs, :image, :image_file
  end
end

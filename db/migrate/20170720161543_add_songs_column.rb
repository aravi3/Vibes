class AddSongsColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :songs, :file_file_name
    remove_column :songs, :file_content_type
    remove_column :songs, :file_file_size
    remove_column :songs, :file_updated_at
  end
end

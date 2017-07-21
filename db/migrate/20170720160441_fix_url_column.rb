class FixUrlColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :songs, :url, :audio
  end
end

class CreateSongs < ActiveRecord::Migration[5.0]
  def change
    create_table :songs do |t|
      t.string :url, null: false
      t.integer :user_id, null: false
      t.integer :genre_id, null: false
      t.string :title, null: false
      t.string :artist, null: false
      t.string :image
      t.timestamps
    end
  end
end

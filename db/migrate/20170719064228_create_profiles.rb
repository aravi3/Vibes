class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :profile_img
      t.string :cover_img
      t.string :description
      t.timestamps
    end

    add_index :profiles, :user_id, unique: true
  end
end

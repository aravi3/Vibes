class RemoveProfileColumns < ActiveRecord::Migration[5.0]
  def change
    remove_column :profiles, :profile_img
    remove_column :profiles, :cover_img
  end
end

class FixAudioColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :songs, :audio, :audio_file
  end
end

class Api::SongsController < ApplicationController
  def index
    @songs = Song.all

    render 'api/songs/index'
  end

  def create
    @song = Song.new(song_params)

    if @song.save
      render 'api/songs/show'
    else
      render(json: @song.errors.full_messages, status: 422)
    end
  end

  def show
    @song = Song.find(params[:id])

    render 'api/songs/show'
  end

  private

  def song_params
    params.require(:song).permit(:track, :user_id, :genre_id, :title, :artist, :image)
  end
end

class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)

    if @like.save
      render 'api/likes/show'
    else
      render(json: @song.errors.full_messages, status: 422)
    end
  end

  def index
    @likes = Like.all.where(user_id: params[:user_id])

    render 'api/likes/index'
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render 'api/likes/show'
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :song_id)
  end
end

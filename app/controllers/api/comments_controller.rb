class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all.where(song_id: params[:song_id])

    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render 'api/comments/show'
    else
      render(json: @comment.errors.full_messages, status: 422)
    end
  end

  def destroy
    @comment = Comment.find(params[:id])

    if @comment.destroy
      render 'api/comments/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :song_id)
  end
end

class Api::UsersController < ApplicationController
  def index
    @users = User.all

    render 'api/users/index'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @profile = Profile.create!(
        user_id: @user.id,
        profile_img: "http://res.cloudinary.com/dnj5rmvun/image/upload/v1500934024/prof-pic_dgrkzf.jpg",
        cover_img: "http://res.cloudinary.com/dnj5rmvun/image/upload/v1500934040/cover-pic_o9dxb3.jpg")

      login!(@user)
      render 'api/users/show'
    else
      render(json: @user.errors.full_messages, status: 422)
    end
  end

  def show
    @user = User.find(params[:id])
    @profile = Profile.find_by(user_id: params[:id])

    render 'api/users/profile'
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end

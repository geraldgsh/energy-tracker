class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create show]

  def create
    @user = User.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
      units: params[:units],
      target: params[:target],
    )
    if @user.save
      render json: {
        code: 200
      }
    else
      render json: {
        code: 400,
        errors: @user.errors.messages
      }
    end
  end

  def show
  end
end
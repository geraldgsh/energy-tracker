class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: %i[create show]

  def create
    @user = User.create(user_params)
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

  private

  def user_params
    params[:user].permit(:name, :email, :password, :units, :target)
  end
end
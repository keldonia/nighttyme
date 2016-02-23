class SessionController < ApplicationController
  def new
    @user ||= User.new
    render :new
  end

  def create
    if @user.find_by_credentials(params[:user][:username], params[:user][:password])
      login! @user
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid credentials"]
      @user = User.new(user_params)
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

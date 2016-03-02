class SessionsController < ApplicationController
  def new
    @user ||= User.new
    render :new
  end

  def create
    if @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid credentials"]
      @user = User.new(user_params)
      render :new
    end
  end

  def destroy
    logout!
    render :new
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end

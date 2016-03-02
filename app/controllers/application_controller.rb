class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :ensure_login!

  def login!(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end

  def current_user
    @user = User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout!
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def ensure_login!
    redirect_to new_session_url unless logged_in?
  end
end

class Api::SearchsuggestionsController < ApplicationController

  def index
    businesses = Business.where('name ILIKE ?', "%#{params[:q]}%").limit(8)

    @searchsuggestions = businesses
    render :index
  end
end

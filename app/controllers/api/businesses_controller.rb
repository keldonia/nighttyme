class Api::BusinessesController < ApplicationController


  def create
    if @business = Business.create(business_params)
      render :show
    else
      @business = Business.new(business_params)
      render json: { :errors => @bussiness.errors.as_json }, :status => 420
    end
  end

  def show
    @business = Business.find_by_id(params[:id])
    render :show
  end

  def index
    @businesses = Business.all #to change with search
    render :index
  end

  def update
    if @business.update!(business_params)
      render :show
    else
      @business ||= @business
      render json: { :errors => @bussiness.errors.as_json }, :status => 420
    end
  end

  def destroy
    @business = Business.find_by_id(params[:id])
    @business.destroy
    render :index
  end

  private

  def business_params
    params.require(business).permit(
      :owner_id,
      :name,
      :description,
      :location,
      :neighborhoods,
      :latitude,
      :longitude,
      :price,
      :email,
      :telephone_number,
      :website,
      hour_attributes: [
        :monday,
        :tuesday,
        :wednesday,
        :thursday,
        :friday,
        :saturday,
        :sunday
      ],
      bussinessattribute_attributes: [
        :reservations,
        :credit_cards,
        :parking,
        :bike_parking,
        :good_for_groups,
        :ambience,
        :noise_level,
        :dancing,
        :live_music,
        :alcohol,
        :best_nights,
        :coat_check,
        :happy_hour,
        :smoking,
        :outdoor_seating,
        :tv,
        :pool_table
      ]
    )
  end
end

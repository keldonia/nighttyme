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
    @business = Business.where(id: params[:id]).includes({reviews: [:user]}, :hour, :bussinessattribute, :tags,).first
    render :show
  end

  def index
    if params[:abridged]
      @businesses = Business.all.select(:id, :name)
      render :abridged
    else
      @businesses = Business.all #to change with search

      if bounds
        @businesses = Business.in_bounds(bounds).includes(:tags)
      end


      if params[:attributes]
        @businesses = @businesses.where(attributes: params[:attributes])
      end

      if params[:price]
        @businesses = @businesses.where(price: price_range)
      end

      if params[:rating]
        @businesses = @businesses.where(average_rating: rating_range)
      end

      # if params[:num_reviews]
      #   @businesses = @businesses.includes(:num_reviews)
      # end

      @businesses = @businesses.includes(:tags)

      if params[:tags]
        @businesses = @businesses.where(tags: params[:tags])
      end

      @businesses.includes({reviews: [:average_rating, :num_reviews]})

      render :index
    end
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

  def bounds
    params[:bounds]
  end

  def price_range
    (params[:price][0]..params[:price][1])
  end

  def rating_range
    (params[:rating][0]..params[:rating][1])
  end

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

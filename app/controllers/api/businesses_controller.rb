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
    @business = Business.where(id: params[:id])
      .includes(:hour, :bussinessattribute, :tags)
      .joins(reviews: [:user] )
      .group('businesses.id')
      .select('businesses.*, AVG(reviews.stars) AS avg_stars, COUNT(reviews.stars) AS num_stars')
      .first

    @reviews = Review.where(business_id: params[:id])
    .order(created_at: :desc)
    .includes(:user)
    .includes(:business)
    render :show
  end

  def index
    if params[:abridged]
      @businesses = Business.all.select(:id, :name)
      render :abridged
    elsif params[:Top5]
      @businesses = Business
      .joins(:reviews)
      .group('businesses.id')
      .select('businesses.*, AVG(reviews.stars) AS avg_stars, COUNT(reviews.stars) AS num_stars')
      .order('avg_stars DESC')
      .limit(5)
      render :index
    else
      @businesses = Business.all.limit(50) #to change with search

      if bounds
        @businesses = Business.in_bounds(bounds)
      end

      if params[:q]
        @businesses = @businesses.where('businesses.name ILIKE ?', "%#{params[:q]}%")

      end

      if params[:attributes]

        @businesses = @businesses.where(attributes: params[:attributes])
      end

      if params[:price]
        @businesses = @businesses.where(price: price_range)
      end

      if params[:tags]
        @businesses = @businesses.joins(:tags).where('tags.name = ?', params[:tags])
      else

        @businesses = @businesses.includes(:tags)
      end

      @businesses = @businesses
        .joins(:reviews)
        .group('businesses.id')
        .select('businesses.*, AVG(reviews.stars) AS avg_stars, COUNT(reviews.stars) AS num_stars')

      if params[:rating]
        @businesses = @businesses.joins(:reviews)
        .group(:id)
        .having("avg(stars) BETWEEN ? AND ?", params[:rating][0].to_f, params[:rating][1].to_f)
      end


      @businesses = @businesses.limit(40)

      # businesses_ids = @businesses.pluck('businesses.id')
      # @tags = Tag.where(business_id: businesses_ids)

      # if params[:num_reviews]
      #   @businesses = @businesses.includes(:num_reviews)
      # end

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

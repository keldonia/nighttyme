class Api::ReviewsController < ApplicationController


  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    @review.archieved = true
    if @review.save
      render :show
    else
      @review = Review.new(review_params)
      render json: { :errors => @review.errors.as_json }, status: 422
    end
  end

  def show
    @review = Review.find_by_id(params[:id]).includes(:reviewtags)
    render :show
  end

  def update
    if @review = Review.update(review_params)
      render :show
    else
      @review = Review.new(review_params)
      render json: { :errors => @review.errors.as_json }, status: 422
    end
  end

  def index
    if params[:Top]
      @reviews = Review.order(stars: :desc, created_at: :desc).limit(1)
    elsif params[:business_id]
      @reviews = Review.where(business_id: params[:business_id])
        .order(created_at: :desc).includes(:user).includes(:business).limit(50)
    else
      @reviews = Review.all.order(created_at: :desc)
      .includes(:user).includes(:business).limit(50) #temp
    end
    render :index
  end

  def destroy
    @review = Review.find_by_id(params[:id])
    @review.destroy
    render :index
  end

  private

  def review_params
    params.require(:review).permit(
      :business_id,
      :title,
      :stars,
      :body,
      :archieved
    )
  end
end

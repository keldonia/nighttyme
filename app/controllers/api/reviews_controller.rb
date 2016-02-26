class Api::ReviewsController < ApplicationController


  def create
    @review = current_user.reviews.new(review_params)
    if @review.save
      render :show
    else
      @review = Review.new(review_params)
      render json: { :errors => @review.errors.as_json }, status: 422
    end
  end

  def show
    @review = Review.find_by_id(params[:id])
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
    @reviews = Review.all.order(created_at: :desc) #temp
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
      :author_id,
      :business_id,
      :title,
      :stars,
      :body,
      :archieved
    )
  end
end

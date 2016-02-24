class ReviewsController < ApplicationController


  def create
    if @review = Review.create(review_params)
      render :show
    else
      @review = Review.new(review_params)
      render :json => { :errors => @review.errors.as_json }, :status => 420
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
      render :json => { :errors => @review.errors.as_json }, :status => 420
    end
  end

  def index
    @reviews = Review.all #temp
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

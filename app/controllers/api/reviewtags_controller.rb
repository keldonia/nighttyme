# == Schema Information
#
# Table name: reviewtags
#
#  id         :integer          not null, primary key
#  useful     :boolean
#  notuseful  :boolean
#  review_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Api::ReviewtagsController < ApplicationController

  def create
    @tag = Tag.new(tag_params)
    @tag.author_id = current_user.id
    if @tag.save
      @tag = Tag.update(tag_params)
      render :show
    end
  end

  def destroy
    @tag = Tag.find_by_id(params[:id])
    @tag.destroy
    render :json
  end

  private

  def tag_params
    params.require(:tag).permit(
      :review_id,
      :useful,
      :notuseful
    )
  end
end

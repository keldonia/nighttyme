# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  stars       :integer          not null
#  body        :text             not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  archieved   :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class ReviewsControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end

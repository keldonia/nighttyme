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

require 'test_helper'

class ReviewtagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

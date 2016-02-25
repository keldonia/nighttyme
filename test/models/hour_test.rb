# == Schema Information
#
# Table name: hours
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  monday      :string           not null
#  tuesday     :string           not null
#  wednesday   :string           not null
#  thursday    :string           not null
#  friday      :string           not null
#  saturday    :string           not null
#  sunday      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class HourTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

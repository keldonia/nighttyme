# == Schema Information
#
# Table name: businesses
#
#  id               :integer          not null, primary key
#  owner_id         :integer          not null
#  name             :string           not null
#  description      :text
#  location         :string           not null
#  neighborhoods    :string
#  latitude         :float            not null
#  longitude        :float            not null
#  price            :integer
#  email            :string
#  telephone_number :string
#  website          :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

require 'test_helper'

class BusinessesControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
end

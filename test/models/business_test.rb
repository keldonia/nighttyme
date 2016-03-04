# == Schema Information
#
# Table name: businesses
#
#  id               :integer          not null, primary key
#  name             :string           not null
#  description      :text
#  location         :string           not null
#  neighborhoods    :string
#  latitude         :float            not null
#  longitude        :float            not null
#  price            :integer
#  telephone_number :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  image_url        :string
#

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

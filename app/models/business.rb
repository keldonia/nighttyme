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

class Business < ActiveRecord::Base
  validates :owner_id, presence: true
  validates :name, presence: true
  validates :location, presence: true

  has_one :hour, inverse_of: :business
  has_one :bussinessattribute, inverse_of: :business

  accepts_nested_attributes_for :hour, :bussinessattribute
end

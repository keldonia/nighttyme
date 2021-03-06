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

class Business < ActiveRecord::Base
  validates :name, presence: true
  validates :location, presence: true

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: 'User'
  has_one :hour, inverse_of: :business
  has_one :bussinessattribute, inverse_of: :business
  has_many :reviews
  has_many :tags, inverse_of: :business

  accepts_nested_attributes_for :hour, :bussinessattribute, :tags

  def self.in_bounds(bounds)
    max_lat = bounds['northEast']['lat'].to_f
    min_lat = bounds['southWest']['lat'].to_f
    min_lng = bounds['southWest']['lng'].to_f
    max_lng = bounds['northEast']['lng'].to_f

    Business.where("businesses.latitude BETWEEN #{min_lat} AND #{max_lat}")
      .where("businesses.longitude BETWEEN #{min_lng} AND #{max_lng}")
  end

  def ordered_reviews
    reviews.order(created_at: :desc)
  end

  def average_rating
    reviews.average(:stars)
  end

  def num_reviews
    reviews.count(:reviews)
  end

  def review_writer
    reviews.includes(:user)
  end

end

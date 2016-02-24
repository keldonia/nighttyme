# == Schema Information
#
# Table name: bussinessattributes
#
#  id              :integer          not null, primary key
#  business_id     :integer          not null
#  reservations    :boolean
#  credit_cards    :boolean
#  parking         :string
#  bike_parking    :string
#  good_for_groups :string
#  ambience        :string
#  noise_level     :string
#  dancing         :boolean
#  live_music      :boolean
#  alcohol         :string
#  best_nights     :string
#  coat_check      :boolean
#  happy_hour      :boolean
#  smoking         :boolean
#  outdoor_seating :boolean
#  tv              :boolean
#  pool_table      :boolean
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Bussinessattribute < ActiveRecord::Base
  
  belongs_to :business, inverse_of: :bussinessattribute
  has_many :reviews

  validates_presence_of :business

end

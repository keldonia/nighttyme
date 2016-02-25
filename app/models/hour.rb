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

class Hour < ActiveRecord::Base
  validates :monday, presence: true
  validates :tuesday, presence: true
  validates :wednesday, presence: true
  validates :thursday, presence: true
  validates :friday, presence: true
  validates :saturday, presence: true
  validates :sunday, presence: true

  belongs_to :business, inverse_of: :hour

  validates_presence_of :business
end

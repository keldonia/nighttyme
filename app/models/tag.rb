# == Schema Information
#
# Table name: tags
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  business_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Tag < ActiveRecord::Base
  validates :business_id, presence: true
  validates :name, presence: true
  validates_uniqueness_of :business_id, scope: :name

  belongs_to :business
end

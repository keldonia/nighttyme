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
  validates :name, presence: true
  validates_uniqueness_of :name, scope: :business_id

  belongs_to :business, inverse_of: :tags
end

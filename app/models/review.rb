# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  stars       :integer          not null
#  body        :text             not null
#  author_id   :integer          not null
#  business_id :integer          not null
#  archieved   :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  validates :author_id, presence: true
  validates :business_id, presence: true
  validates :title, presence: true
  validates :stars, presence: true
  validates :body, presence: true
  validates :archieved, presence: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: 'User'
  belongs_to :business

end

# == Schema Information
#
# Table name: reviewtags
#
#  id         :integer          not null, primary key
#  useful     :boolean
#  notuseful  :boolean
#  review_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Reviewtag < ActiveRecord::Base
  belongs_to :review

  def num_useful(id)
    Tag.where(id: id).count(:useful)
  end

  def num_notuseful(id)
    Tag.where(id: id).count(:notuseful)
  end
end

# == Schema Information
#
# Table name: hours
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  monday      :time             not null
#  tuesday     :time             not null
#  wednesday   :time             not null
#  thursday    :time             not null
#  friday      :time             not null
#  saturday    :time             not null
#  sunday      :time             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Hour < ActiveRecord::Base
end

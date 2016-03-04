class BusinessUpdateImage < ActiveRecord::Migration
  def change
    add_column :businesses, :image_url, :string
  end
end

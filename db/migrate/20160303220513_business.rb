class Business < ActiveRecord::Migration
  def change

    remove_index :businesses, :owner_id

    remove_column :businesses, :owner_id
    remove_column :businesses, :email
    remove_column :businesses, :website

  end
end

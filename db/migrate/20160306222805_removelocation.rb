class Removelocation < ActiveRecord::Migration
  def change
    remove_index :users, :location

    remove_column :users, :location
  end
end

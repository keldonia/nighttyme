class CreateBusinesses < ActiveRecord::Migration
  def change
    create_table :businesses do |t|
      t.integer :owner_id, null: false
      t.string  :name, null: false
      t.text    :description
      t.string  :location, null: false
      t.integer :price
      t.string  :email
      t.string  :telephone_number
      t.string  :website
      t.timestamps null: false
    end

    add_index :businesses, :owner_id
    add_index :businesses, :location
    add_index :businesses, :name
    add_index :businesses, :price
  end
end

class CreateBussinessattributes < ActiveRecord::Migration
  def change
    create_table :bussinessattributes do |t|
      t.integer :business_id, null: false
      t.boolean :reservations
      t.boolean :credit_cards
      t.string  :parking
      t.string  :bike_parking
      t.string  :good_for_groups
      t.string  :ambience
      t.string  :noise_level
      t.boolean :dancing
      t.boolean :live_music
      t.string  :alcohol
      t.string  :best_nights
      t.boolean :coat_check
      t.boolean :happy_hour
      t.boolean :smoking
      t.boolean :outdoor_seating
      t.boolean :tv
      t.boolean :pool_table
      t.timestamps null: false
    end

    add_index :bussinessattributes, :business_id, unique: true
    add_index :bussinessattributes, :reservations
    add_index :bussinessattributes, :credit_cards
    add_index :bussinessattributes, :parking
    add_index :bussinessattributes, :bike_parking
    add_index :bussinessattributes, :good_for_groups
    add_index :bussinessattributes, :ambience
    add_index :bussinessattributes, :noise_level
    add_index :bussinessattributes, :dancing
    add_index :bussinessattributes, :live_music
    add_index :bussinessattributes, :alcohol
    add_index :bussinessattributes, :best_nights
    add_index :bussinessattributes, :coat_check
    add_index :bussinessattributes, :happy_hour
    add_index :bussinessattributes, :smoking
    add_index :bussinessattributes, :outdoor_seating
    add_index :bussinessattributes, :tv
    add_index :bussinessattributes, :pool_table

  end
end

class CreateHours < ActiveRecord::Migration
  def change
    create_table :hours do |t|
      t.integer :business_id, null: false
      t.time :monday, null: false
      t.time :tuesday, null: false
      t.time :wednesday, null: false
      t.time :thursday, null: false
      t.time :friday, null: false
      t.time :saturday, null: false
      t.time :sunday, null: false
      t.timestamps null: false
    end

    add_index :hours, :business_id, unique: true
    add_index :hours, :monday
    add_index :hours, :tuesday
    add_index :hours, :wednesday
    add_index :hours, :thursday
    add_index :hours, :friday
    add_index :hours, :saturday
    add_index :hours, :sunday
  end
end

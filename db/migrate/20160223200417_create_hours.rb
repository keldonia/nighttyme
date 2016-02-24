class CreateHours < ActiveRecord::Migration
  def change
    create_table :hours do |t|
      t.integer :business_id, null: false
      t.string :monday, null: false
      t.string :tuesday, null: false
      t.string :wednesday, null: false
      t.string :thursday, null: false
      t.string :friday, null: false
      t.string :saturday, null: false
      t.string :sunday, null: false
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

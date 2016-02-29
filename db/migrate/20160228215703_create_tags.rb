class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string  :name, null: false
      t.integer :business_id, null: false

      t.timestamps null: false
    end

    add_index :tags, :business_id
    add_index :tags, [:name, :business_id], unique: true
  end
end

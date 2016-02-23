class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.integer :stars, null: false
      t.text    :body, null: false
      t.integer :author_id, null: false
      t.integer :business_id, null: false
      t.boolean :archieved, null: false
      t.timestamps null: false
    end

    add_index :reviews, :title
    add_index :reviews, :business_id
    add_index :reviews, :author_id
    add_index :reviews, :stars

  end
end

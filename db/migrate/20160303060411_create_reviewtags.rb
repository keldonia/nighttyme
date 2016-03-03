class CreateReviewtags < ActiveRecord::Migration
  def change
    create_table :reviewtags do |t|
      t.boolean :useful
      t.boolean :notuseful
      t.integer :review_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
  end
end

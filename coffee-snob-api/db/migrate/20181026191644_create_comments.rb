class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :content
      t.string :commenter
      t.string :cafe_id
      t.timestamps
    end
  end
end

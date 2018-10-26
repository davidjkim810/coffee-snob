class CreateCafes < ActiveRecord::Migration[5.2]
  def change
    create_table :cafes do |t|
      t.string :name
      t.string :address
      t.string :description
      t.string :brew_methods
      t.string :price_range
      t.string :bean_source
      t.string :image_url
      t.timestamps
    end
  end
end

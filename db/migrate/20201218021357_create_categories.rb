class CreateCategories < ActiveRecord::Migration[6.0]
  def change
    create_table :categories do |t|
      t.string :name
      t.text :description
      t.boolean :display_in_navbar, default: true


      t.timestamps
    end
  end
end

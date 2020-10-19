class AddIngredientsToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :ingredients, :string
  end
end

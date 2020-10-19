class AddTimeToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :time, :string
  end
end

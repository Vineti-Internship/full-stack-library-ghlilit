class RemoveDecriptionFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :decription, :string
  end
end

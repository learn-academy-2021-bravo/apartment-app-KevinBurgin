class AddPictureToApartment < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :picture, :string
  end
end

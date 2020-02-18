class CreateCountries < ActiveRecord::Migration[6.0]
  def change
    create_table :countries do |t|
      t.string :name
      t.string :iso_code
      t.multi_polygon :geom

      t.timestamps
    end
  end
end

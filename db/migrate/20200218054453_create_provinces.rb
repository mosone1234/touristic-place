class CreateProvinces < ActiveRecord::Migration[6.0]
  def change
    create_table :provinces do |t|
      t.string :iso_code
      t.string :country_name
      t.string :dep_iso_code
      t.string :dep_name
      t.string :pro_iso_code
      t.string :pro_name
      t.string :other_name
      t.string :type
      t.string :prov_code
      t.multi_polygon :geom

      t.timestamps
    end
  end
end

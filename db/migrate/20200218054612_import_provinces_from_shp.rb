class ImportProvincesFromShp < ActiveRecord::Migration[6.0]
  def up
    from_shp_sql = `shp2pgsql -c -g geom -W LATIN1 -s 4326 #{Rails.root.join('db', 'shpfiles', 'gadm36_BOL_2.shp')} province_ref`

    Province.transaction do
      execute from_shp_sql
      
      execute <<-SQL
          insert into provinces(iso_code, country_name, dep_iso_code, dep_name, pro_iso_code, pro_name, other_name, type, prov_code, geom, created_at, updated_at)
            select gid_0, name_0, gid_1, name_1, gid_2, name_2, varname_2, engtype_2, hasc_2, geom, date('12-12-12'), date('12-12-13') from province_ref
      SQL

      drop_table :province_ref
    end 
  end

  def down
    Province.delete_all
  end
end

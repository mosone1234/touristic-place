class ImportCountriesFromShp < ActiveRecord::Migration[6.0]
  def up
    from_shp_sql = `shp2pgsql -c -g geom -W LATIN1 -s 4326 #{Rails.root.join('db', 'shpfiles', 'gadm36_BOL_0.shp')} countries_ref`

    Country.transaction do
      execute from_shp_sql

      execute <<-SQL
          insert into countries(name, iso_code, geom, created_at, updated_at)
            select name_0, gid_0, geom, date('12-12-12'), date('12-12-13') from countries_ref
      SQL

      drop_table :countries_ref
    end 
  end

  def down
    Country.delete_all
  end
end

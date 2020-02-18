class ImportDepartmentsFromShp < ActiveRecord::Migration[6.0]
  def up
    from_shp_sql = `shp2pgsql -c -g geom -W LATIN1 -s 4326 #{Rails.root.join('db', 'shpfiles', 'gadm36_BOL_1.shp')} department_ref`
    
    Department.transaction do
      execute from_shp_sql
      
      execute <<-SQL
          insert into departments(iso_code, country_name, dep_iso_code, dep_name, type, dep_code, geom, created_at, updated_at)
            select gid_0, name_0, gid_1, name_1, engtype_1, hasc_1, geom, date('12-12-12'), date('12-12-13') from department_ref
      SQL

      drop_table :department_ref
    end 
  end

  def down
    Department.delete_all
  end
end

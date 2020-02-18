# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_18_054612) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.string "iso_code"
    t.geometry "geom", limit: {:srid=>0, :type=>"multi_polygon"}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "departments", force: :cascade do |t|
    t.string "iso_code"
    t.string "country_name"
    t.string "dep_iso_code"
    t.string "dep_name"
    t.string "type"
    t.string "dep_code"
    t.geometry "geom", limit: {:srid=>0, :type=>"multi_polygon"}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "provinces", force: :cascade do |t|
    t.string "iso_code"
    t.string "country_name"
    t.string "dep_iso_code"
    t.string "dep_name"
    t.string "pro_iso_code"
    t.string "pro_name"
    t.string "other_name"
    t.string "type"
    t.string "prov_code"
    t.geometry "geom", limit: {:srid=>0, :type=>"multi_polygon"}
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end

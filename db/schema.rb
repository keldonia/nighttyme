# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160228215703) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.integer  "owner_id",         null: false
    t.string   "name",             null: false
    t.text     "description"
    t.string   "location",         null: false
    t.string   "neighborhoods"
    t.float    "latitude",         null: false
    t.float    "longitude",        null: false
    t.integer  "price"
    t.string   "email"
    t.string   "telephone_number"
    t.string   "website"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "businesses", ["latitude", "longitude"], name: "index_businesses_on_latitude_and_longitude", using: :btree
  add_index "businesses", ["location"], name: "index_businesses_on_location", using: :btree
  add_index "businesses", ["name"], name: "index_businesses_on_name", using: :btree
  add_index "businesses", ["neighborhoods"], name: "index_businesses_on_neighborhoods", using: :btree
  add_index "businesses", ["owner_id"], name: "index_businesses_on_owner_id", using: :btree
  add_index "businesses", ["price"], name: "index_businesses_on_price", using: :btree

  create_table "bussinessattributes", force: :cascade do |t|
    t.integer  "business_id",     null: false
    t.boolean  "reservations"
    t.boolean  "credit_cards"
    t.string   "parking"
    t.string   "bike_parking"
    t.string   "good_for_groups"
    t.string   "ambience"
    t.string   "noise_level"
    t.boolean  "dancing"
    t.boolean  "live_music"
    t.string   "alcohol"
    t.string   "best_nights"
    t.boolean  "coat_check"
    t.boolean  "happy_hour"
    t.boolean  "smoking"
    t.boolean  "outdoor_seating"
    t.boolean  "tv"
    t.boolean  "pool_table"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "bussinessattributes", ["alcohol"], name: "index_bussinessattributes_on_alcohol", using: :btree
  add_index "bussinessattributes", ["ambience"], name: "index_bussinessattributes_on_ambience", using: :btree
  add_index "bussinessattributes", ["best_nights"], name: "index_bussinessattributes_on_best_nights", using: :btree
  add_index "bussinessattributes", ["bike_parking"], name: "index_bussinessattributes_on_bike_parking", using: :btree
  add_index "bussinessattributes", ["business_id"], name: "index_bussinessattributes_on_business_id", unique: true, using: :btree
  add_index "bussinessattributes", ["coat_check"], name: "index_bussinessattributes_on_coat_check", using: :btree
  add_index "bussinessattributes", ["credit_cards"], name: "index_bussinessattributes_on_credit_cards", using: :btree
  add_index "bussinessattributes", ["dancing"], name: "index_bussinessattributes_on_dancing", using: :btree
  add_index "bussinessattributes", ["good_for_groups"], name: "index_bussinessattributes_on_good_for_groups", using: :btree
  add_index "bussinessattributes", ["happy_hour"], name: "index_bussinessattributes_on_happy_hour", using: :btree
  add_index "bussinessattributes", ["live_music"], name: "index_bussinessattributes_on_live_music", using: :btree
  add_index "bussinessattributes", ["noise_level"], name: "index_bussinessattributes_on_noise_level", using: :btree
  add_index "bussinessattributes", ["outdoor_seating"], name: "index_bussinessattributes_on_outdoor_seating", using: :btree
  add_index "bussinessattributes", ["parking"], name: "index_bussinessattributes_on_parking", using: :btree
  add_index "bussinessattributes", ["pool_table"], name: "index_bussinessattributes_on_pool_table", using: :btree
  add_index "bussinessattributes", ["reservations"], name: "index_bussinessattributes_on_reservations", using: :btree
  add_index "bussinessattributes", ["smoking"], name: "index_bussinessattributes_on_smoking", using: :btree
  add_index "bussinessattributes", ["tv"], name: "index_bussinessattributes_on_tv", using: :btree

  create_table "hours", force: :cascade do |t|
    t.integer  "business_id", null: false
    t.string   "monday",      null: false
    t.string   "tuesday",     null: false
    t.string   "wednesday",   null: false
    t.string   "thursday",    null: false
    t.string   "friday",      null: false
    t.string   "saturday",    null: false
    t.string   "sunday",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "hours", ["business_id"], name: "index_hours_on_business_id", unique: true, using: :btree
  add_index "hours", ["friday"], name: "index_hours_on_friday", using: :btree
  add_index "hours", ["monday"], name: "index_hours_on_monday", using: :btree
  add_index "hours", ["saturday"], name: "index_hours_on_saturday", using: :btree
  add_index "hours", ["sunday"], name: "index_hours_on_sunday", using: :btree
  add_index "hours", ["thursday"], name: "index_hours_on_thursday", using: :btree
  add_index "hours", ["tuesday"], name: "index_hours_on_tuesday", using: :btree
  add_index "hours", ["wednesday"], name: "index_hours_on_wednesday", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "stars",       null: false
    t.text     "body",        null: false
    t.integer  "author_id",   null: false
    t.integer  "business_id", null: false
    t.boolean  "archieved",   null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["business_id"], name: "index_reviews_on_business_id", using: :btree
  add_index "reviews", ["stars"], name: "index_reviews_on_stars", using: :btree
  add_index "reviews", ["title"], name: "index_reviews_on_title", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name",        null: false
    t.integer  "business_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "tags", ["business_id"], name: "index_tags_on_business_id", using: :btree
  add_index "tags", ["name", "business_id"], name: "index_tags_on_name_and_business_id", unique: true, using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "email",           null: false
    t.string   "location",        null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["location"], name: "index_users_on_location", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end

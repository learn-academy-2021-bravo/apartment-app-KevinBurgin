# create_table "apartments", force: :cascade do |t|
#     t.string "street"
#     t.string "city"
#     t.string "state"
#     t.string "manager"
#     t.string "managers_email"
#     t.string "price"
#     t.integer "bedrooms"
#     t.float "bathrooms"
#     t.string "pets"
#     t.integer "user_id"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

user = User.create email: 'kevinburgin@testing.com', password: 'testing123', password_confirmation: 'testing123'

p user.id
apartments=[
    {
        street: '123 Blah Blvd',
        city: 'Medford',
        state: 'OR',
        manager: 'Mrs. Garcia',
        managers_email: 'Garcia@fake.com',
        price: '$ 2000',
        bedrooms: 2,
        bathrooms: 2.5,
        pets: 'yes',
        user_id: user.id
    },
    {
        street: '3845 Noble Drive',
        city:'San Diego',
        state: 'CA',
        manager: 'Mr. David',
        managers_email: 'David@fake.com',
        price: '$ 2000',
        bedrooms: 3,
        bathrooms: 2,
        pets:'small pets ok',
        user_id: user.id
    }
]

apartments.each do |value|
    Apartment.create value
    puts "creating apartment: #{value}"
end
require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) { User.create email: 'kevin@testing.com', password: 'testing123', 
  password_confirmation: 'testing123'}
  describe "GET /index" do
    it 'gets a list of all the apartments' do 
      Apartment.create(
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
      )
      get '/apartments'
      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1
    end
  end
end

require 'rails_helper'

RSpec.describe Apartment, type: :model do
  let(:user) { User.create email: 'kevin@testing.com', password: 'testing123', 
  password_confirmation: 'testing123'}
  
  it "should have a street" do
    apartment = Apartment.create(
    city: 'Medford',
    state: 'OR',
    manager: 'Mrs. Garcia',
    managers_email: 'Garcia@fake.com',
    price: '$ 2000',
    bedrooms: 2,
    bathrooms: 2.5,
    pets: 'yes',
    user_id: user.id)
    expect(apartment.errors[:street]).to_not be_empty
  end
  it "should have a city" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    state: 'OR',
    manager: 'Mrs. Garcia',
    managers_email: 'Garcia@fake.com',
    price: '$ 2000',
    bedrooms: 2,
    bathrooms: 2.5,
    pets: 'yes',
    user_id: user.id)
    expect(apartment.errors[:city]).to_not be_empty
  end
  it "should have a state" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    city: 'Medford',
    manager: 'Mrs. Garcia',
    managers_email: 'Garcia@fake.com',
    price: '$ 2000',
    bedrooms: 2,
    bathrooms: 2.5,
    pets: 'yes',
    user_id: user.id)
    expect(apartment.errors[:state]).to_not be_empty
  end
  it "should have a manager" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    city: 'Medford',
    state: 'OR',
    managers_email: 'Garcia@fake.com',
    price: '$ 2000',
    bedrooms: 2,
    bathrooms: 2.5,
    pets: 'yes',
    user_id: user.id)
    expect(apartment.errors[:manager]).to_not be_empty
  end
  it "should have a managers_email" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    city: 'Medford',
    state: 'OR',
    manager: 'Mrs. Garcia',
    price: '$ 2000',
    bedrooms: 2,
    bathrooms: 2.5,
    pets: 'yes',
    user_id: user.id)
    expect(apartment.errors[:managers_email]).to_not be_empty
  end
  it "should have a price" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    city: 'Medford',
    state: 'OR',
    manager: 'Mrs. Garcia',
    managers_email: 'Garcia@fake.com',
    bedrooms: 2,
    bathrooms: 2.5,
    pets: 'yes',
    user_id: user.id)
    expect(apartment.errors[:price]).to_not be_empty
  end
  it "should have a bedrooms" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    city: 'Medford',
    state: 'OR',
    manager: 'Mrs. Garcia',
    managers_email: 'Garcia@fake.com',
    price: '$ 2000',
    bathrooms: 2.5,
    pets: 'yes',
    user_id: user.id)
    expect(apartment.errors[:bedrooms]).to_not be_empty
  end
  it "should have a bathrooms" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    city: 'Medford',
    state: 'OR',
    manager: 'Mrs. Garcia',
    managers_email: 'Garcia@fake.com',
    price: '$ 2000',
    bedrooms: 2,
    pets: 'yes',
    user_id: user.id)
    expect(apartment.errors[:bathrooms]).to_not be_empty
  end
  it "should have a pets" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    city: 'Medford',
    state: 'OR',
    manager: 'Mrs. Garcia',
    managers_email: 'Garcia@fake.com',
    price: '$ 2000',
    bedrooms: 2,
    bathrooms: 2.5,
    user_id: user.id)
    expect(apartment.errors[:pets]).to_not be_empty
  end
  it "should have a user" do
    apartment = Apartment.create(
    street: '123 Blah Blvd',
    city: 'Medford',
    state: 'OR',
    manager: 'Mrs. Garcia',
    managers_email: 'Garcia@fake.com',
    price: '$ 2000',
    bedrooms: 2,
    bathrooms: 2.5,
    pets: 'yes')
    expect(apartment.errors[:user_id]).to_not be_empty
  end
end

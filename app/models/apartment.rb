class Apartment < ApplicationRecord
    belongs_to :user
    validates :picture, :street, :city, :state, :manager, :managers_email, :price, :bedrooms, :bathrooms, :pets, :user_id, presence: true
end

class ApartmentsController < ApplicationController
    def index
        apartments =Apartment.all
        render json: apartments
    end
    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end
    def update
        apartment = Apartment.find(params[:id])
        apartment.update(apartment_params)
        render json: apartment
    end
    def destroy
    end
    private
    def apartment_params
        params.require(:apartment).permit(:picture, :street, :city, :state, 
        :manager, :managers_email, :price, :bedrooms, :bathrooms, :pets, :user_id)
    end
end

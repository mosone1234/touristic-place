class CountriesController < ApplicationController
  def index
    @countries = Country.all

    # respond_to do |format|
    #   format.json do
        feature_collection = Department.to_feature_collection @countries
        render json: RGeo::GeoJSON.encode(feature_collection)
      # end

      # format.html
      # render json: @countries
    # end
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end
end

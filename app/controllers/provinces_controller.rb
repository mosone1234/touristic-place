class ProvincesController < ApplicationController
  def index
    @provinces = Province.all

    # respond_to do |format|
    #   format.json do  
        feature_collection = Province.to_feature_collection @provinces
        render json: RGeo::GeoJSON.encode(feature_collection)
    # render json: @provinces
    #   end

    #   # format.html
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

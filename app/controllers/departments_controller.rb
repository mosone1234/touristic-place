class DepartmentsController < ApplicationController
  def index
    @departments = Department.all

    # respond_to do |format|
    #   format.json do  
        feature_collection = Department.to_feature_collection @departments
        render json: RGeo::GeoJSON.encode(feature_collection)
    #   end

    #   # format.html
    # end

    # respond_to do |format|
    #   format.json do    
        # feature_collection = Province.to_feature_collection @provinces
        # render json: RGeo::GeoJSON.encode(feature_collection)
    # render json: @departments
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

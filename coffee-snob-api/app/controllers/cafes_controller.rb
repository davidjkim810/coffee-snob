class CafesController < ApplicationController
  before_action :set_cafe, only: [:show, :update, :destroy]

  def index
    @cafes = Cafe.all
    render json: @cafes
  end

  def show
    render json: @cafe
  end

  def create
    binding.pry
    @cafe = Cafe.new(cafe_params)
    if @cafe.save
      render json: @cafe
    end
  end

  def update
    if @cafe.update(cafe_params)
      render json: @cafe
    end
  end

  def destroy
    @cafe.destroy
  end

  private

  def cafe_params
    params.require(:cafe).permit(:name, :address, :description, :brew_methods, :price_range, :bean_source, :image_url)
  end

  def set_cafe
    @cafe = Cafe.find(params[:id])
  end

end

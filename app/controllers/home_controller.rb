class HomeController < ApplicationController
  def index
    @user = User.find(params[:id])
    @money = Money.find(params[:id])    
  end

  def show
  end
end

class Api::SearchController < ActionController::API
  def index
    if params[:query].nil?
      render json: []
    else
      names = []
      50.times { names << Faker::Name.name }
      render json: names
    end
  end

end

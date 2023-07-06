Rails.application.routes.draw do
  root 'pages#index'
  namespace :api do
    get 'search', to: 'search#index', as: :search
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

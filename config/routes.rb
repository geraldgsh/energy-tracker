Rails.application.routes.draw do
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope "/api" do
    resources :users, only: [:create]
  end
end

Rails.application.routes.draw do
  scope "/api" do
    resources :users, only: [:create]
  end
  root 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope "/api" do
    resources :users, only: [:create]
    scope :users do
      resources :sessions,only: [:create],module: :users
      delete "/sessions", to: "users/sessions#destroy", module: :users
    end
  end
end

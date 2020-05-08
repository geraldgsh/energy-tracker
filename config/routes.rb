Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'readings/index'
      get 'readings/create'
      get 'readings/show'
      get 'readings/destroy'
    end
  end
  namespace :api do
    namespace :v1 do
      get 'readings', to: 'readings#index'
      post 'readings', to: 'readings#create'
      get 'readings/show'
      get 'readings/destroy'
      get '/readings/:id', to: 'readings#show'
      get '/readings/user/:id', to: 'readings#list_readings_by_user'
      get '/user/:user_id/reading/:id', to: 'readings#list_reading'
    end
  end
  namespace :api do
    namespace :v1 do
      post 'users', to: 'users#create'
      get 'users', to: 'users#index'
      get 'users/:id', to: 'users#find_user'
    end
  end
  namespace :api do
    namespace :v1 do
      post 'users/sessions', to: 'users/sessions#create'
      delete 'users/sessions', to: 'users/sessions#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

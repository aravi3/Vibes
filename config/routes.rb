Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do

    resources :users, only: [:index, :create, :update, :show] do
      resources :likes, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :songs, only: [:index, :show, :create, :destroy] do
      resources :comments, only: [:index, :create]
    end

    resources :comments, only: [:destroy]
    resources :likes, only: [:create, :destroy]
    resources :genres, only: [:index]
  end

  root "static_pages#root"
end

Rails.application.routes.draw do
  resources :posts
  get 'about/index'
  get 'posts/index'

  root 'posts#index'
end

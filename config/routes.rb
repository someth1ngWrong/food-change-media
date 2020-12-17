Rails.application.routes.draw do

  resources :posts
  resources :subscribers
  # get 'about/index'
  get 'posts/index'

  # root 'posts#index'

  get 'welcome', to: 'welcome#index'
  get 'about', to: 'about#index'
  get 'styleguide', to: 'styleguide#index'

  root 'welcome#index'
  # get 'welcome/index', to: 'welcome#index'
end

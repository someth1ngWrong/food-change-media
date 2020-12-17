Rails.application.routes.draw do
  resources :posts
  resources :subscribers
  # get 'about/index'
  # get 'welcome/index', to: 'welcome#index'
  # root 'welcome#index'
  # root 'posts#index'
  get 'partners/index'
  get 'landing/index'

  get 'posts/index'
  get 'welcome', to: 'welcome#index'
  get 'about', to: 'about#index'

  root 'landing#index'
end

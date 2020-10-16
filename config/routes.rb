Rails.application.routes.draw do
  resources :posts
  # get 'about/index'
  get 'posts/index'

  # root 'posts#index'

  get 'welcome', to: 'welcome#index'
  get 'about', to: 'about#index'

  root 'welcome#index'
  # get 'welcome/index', to: 'welcome#index'
end

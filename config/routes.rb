Rails.application.routes.draw do
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  # resources :posts
  resources :subscribers
  resources :users
  resources :posts do
    resources :tasties
    resources :yummies
  end
  # get 'about/index'
  # get 'welcome/index', to: 'welcome#index'
  # root 'welcome#index'
  # root 'posts#index'
  get 'partners/index'
  get 'landing/index', to: 'landing#index'
  get 'users/index'


  get 'posts/index'
  get 'welcome', to: 'welcome#index'
  get 'about', to: 'about#index'
  get 'styleguide', to: 'styleguide#index'

  root 'landing#index'
end

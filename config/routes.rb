Rails.application.routes.draw do
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
  # resources :posts
  resources :subscribers

  resources :posts do
    resources :tasties
    resources :yummies
    resources :favorites
  end

  get 'posts/index'

  get 'about', to: 'about#index'
  get 'welcome', to: 'welcome#index'
  get 'landing/index', to: 'landing#index'
  get 'partners/index', to: 'partners#index'
  get 'styleguide', to: 'styleguide#index'
  root 'landing#index'

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show', :as => :user
  delete 'users/:id', to: 'users#destroy'
end

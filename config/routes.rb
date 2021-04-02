Rails.application.routes.draw do
  resources :categories
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admins
  devise_for :users

  devise_scope :user do
      get '/users/sign_out' => 'devise/sessions#destroy'
  end

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
  get 'all_collections', to: 'all_collections#index'
  get 'landing/index', to: 'landing#index'
  get 'partners/index', to: 'partners#index'
  get 'styleguide', to: 'styleguide#index'
  root 'landing#index'

  get 'users', to: 'users#index'
  get 'users/:id' => 'users#show', :as => :user
  delete 'users/:id', to: 'users#destroy'

  get 'admins', to: 'admins#index'
  get 'admins/:id' => 'admins#show', :as => :admin
  delete 'admins/:id', to: 'admins#destroy'

  get 'author', to: 'author#index'
end

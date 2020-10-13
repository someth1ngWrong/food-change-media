Rails.application.routes.draw do
  get 'about/index'
	get 'welcome/index'

	root 'welcome#index'
end

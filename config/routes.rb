Rails.application.routes.draw do
  get 'provinces/index'
  get 'provinces/show'
  get 'provinces/new'
  get 'provinces/edit'
  get 'provinces/create'
  get 'provinces/update'
  get 'provinces/destroy'

  get 'departments/index'
  get 'departments/show'
  get 'departments/new'
  get 'departments/edit'
  get 'departments/create'
  get 'departments/update'
  get 'departments/destroy'
  
  get 'countries/index'
  get 'countries/show'
  get 'countries/new'
  get 'countries/edit'
  get 'countries/create'
  get 'countries/update'
  get 'countries/destroy'
  # get 'home_page/index'
  root 'home_page#index'
  get '/*path' => 'home_page#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

# == Route Map
#
#               Prefix Verb   URI Pattern                                    Controller#Action
#                users POST   /users(.:format)                               users#create
#             new_user GET    /users/new(.:format)                           users#new
#              session POST   /session(.:format)                             sessions#create
#          new_session GET    /session/new(.:format)                         sessions#new
#                      DELETE /session(.:format)                             sessions#destroy
# api_business_reviews GET    /api/businesses/:business_id/reviews(.:format) api/reviews#index {:format=>:json}
#                      POST   /api/businesses/:business_id/reviews(.:format) api/reviews#create {:format=>:json}
#       api_businesses GET    /api/businesses(.:format)                      api/businesses#index {:format=>:json}
#                      POST   /api/businesses(.:format)                      api/businesses#create {:format=>:json}
#         api_business GET    /api/businesses/:id(.:format)                  api/businesses#show {:format=>:json}
#                      PATCH  /api/businesses/:id(.:format)                  api/businesses#update {:format=>:json}
#                      PUT    /api/businesses/:id(.:format)                  api/businesses#update {:format=>:json}
#                      DELETE /api/businesses/:id(.:format)                  api/businesses#destroy {:format=>:json}
#          api_reviews GET    /api/reviews(.:format)                         api/reviews#index {:format=>:json}
#           api_review GET    /api/reviews/:id(.:format)                     api/reviews#show {:format=>:json}
#                      PATCH  /api/reviews/:id(.:format)                     api/reviews#update {:format=>:json}
#                      PUT    /api/reviews/:id(.:format)                     api/reviews#update {:format=>:json}
#                      DELETE /api/reviews/:id(.:format)                     api/reviews#destroy {:format=>:json}
#                 root GET    /                                              static_pages#root
#

Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: { format: :json } do
    resources :businesses, only: [:create, :destroy, :update, :index, :show] do
      resources :reviews, only: [:create, :index]
    end
    resources :reviews, only: [:destroy, :update, :show, :index]
  end

  root 'static_pages#root'
end

Rails.application.routes.draw do

  scope '/api' do
    resources :cafes do
      resources :comments
    end
  end

end

# frozen_string_literal: true

Rails.application.routes.draw do
  scope '(:locale)', constraints: { locale: /ru|en/ } do
    get 'about' => 'index#about'
    get 'auth' => 'index#auth'
    get 'item' => 'items#show'
    get 'cart' => 'items#cart'
    get 'done' => 'items#done'

    scope :popups, controller: :popups, defaults: { format: :json } do
      get 'form'
      get 'sms'
      get 'local_sms'
      get 'limit'
      get 'local_limit'
      get 'pay'
      get 'pay2'
      get 'phone'
      get 'sms2'
      get 'done', as: :popup_done
    end
  end
end

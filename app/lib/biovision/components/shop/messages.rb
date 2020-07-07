# frozen_string_literal: true

module Biovision
  module Components
    module Shop
      # Messages for different locales
      class Messages
        def self.sidebar
          {
            root: [
              :root,
              { ru: 'главная страница', en: 'Main page of store' },
              [
                [
                  {
                    ru: ['Баннер на главной странице', 'Размещение баннеров Мокка на главной странице позволяет клиентам узнать о возможности получить аванс, оформить его и купить больше. Клик по баннеру ведёт на форму регистрации, заполнив которую можно сразу получить сумму доступного аванса.'],
                    en: ['Banner on the main page', 'Mokka banners on the main page of your store let your clients know about the opportunity to buy now and pay later with Mokka.  Click on the banner to see our streamlined 2-click registration iframe form, which will let your shopper know immediately how much they can spend in your store.']
                  },
                  'index-items-banner'
                ],
                [
                  {
                    ru: ['Подвал', 'Логотип Мокка в подвале сайта рядом с логотипами платёжных систем информирует о возможности оплачивать частями. Клик ведёт на лендинг.'],
                    en: ['Footer', 'Mokka logo in the footer of the site next to the logos of other payment methods informs your clients about Mokka’s buy now pay later service.A click on Mokka logo in the footer displays the Mokka landing page, where the shopper can learn more about the service.']
                  },
                  'main-footer'
                ],
                [
                  {
                    ru: ['Личный кабинет покупателя', 'Повторный пользователь видит величину доступного аванса в своём личном кабинете, что мотивирует его совершить покупку.'],
                    en: ['Registered customer’s account', 'Customers who are registered in your store can see their available Mokka advance here, which can motivate them to make a bigger purchase.']
                  },
                  'header-authentication'
                ],
              ],
              {
                ru: 'Добро пожаловать в демо-магазин Мокка! Здесь мы покажем, как представлять сервис «Мокка – оплата авансом» в вашем онлайн магазине для достижения ваших целей по&nbsp;увеличению конверсий и средней корзины.',
                en: 'Welcome to Mokka demo store! Here you can find out how to communicate Mokka in your online store to increase your average check and conversion.  Mokka solution integrates with your store and customer journey and never redirects your shopper anywhere to complete their purchase.'
              }
            ],
            about: [
              :about,
              { ru: 'лендинг', en: 'Landing' },
              [
                [
                  {
                    ru: ['Шапка лендинга', 'Содержит описание ключевых условий использования сервиса — срок оплаты частями, переплата в месяц, сумма минимального заказа и короткую инструкцию как работает сервис.<br/>Возможна интеграция лендинга через ссылку. Команда Мокка верстает лендинг на своей стороне, дает уникальную ссылку, которую партнеру достаточно вставить на нужной странице сайта. После этого лендинг подгрузится автоматически'],
                    en: ['Landing header', 'The header contains information about key terms on which buy now pay later is offered in your store such as payment period, minimum order amount, additional fees and short instructions on how the service works.']
                  },
                  'about-header'
                ],
                [
                  {
                    ru: ['Форма регистрации', 'Стандартная форма регистрации, заполнив которую, пользователь может сразу узнать свой доступный аванс.'],
                    en: ['Registration form', 'The streamlined registration form is embedded in the landing to allow shoppers to register and immediately find out how much they can spend with buy now pay later']
                  },
                  'register-form'
                ],
                [
                  {
                    ru: ['FAQ', 'Ответы на частые вопросы. Список FAQ можно дорабатывать в зависимости от специфики бизнеса партнера.'],
                    en: ['FAQ', 'Answers to frequently asked questions. The FAQ list can be customized']
                  },
                  'about-faq'
                ],
              ],
              {
                ru: 'Лендинг нужен, чтобы направлять на него клиентов из имейл рассылок, баннеров, социальных сетей и др. каналов.<br/>На лендинге ваши клиенты могут уточнить информацию и зарегистрироваться<br/>в Мокка, не уходя с вашего сайта.',
                en: 'Mokka’s landing page allows you to direct shoppers from your email newsletters, banners, social media and other marketing channels to your own store if they want to learn more about buy now pay later and to register for the service.  The landing contains an overview of the service, terms and FAQ.  The landing can be integrated to you site via a link which the Mokka team provides.'
              }
            ],
            item: [
              :item,
              { ru: 'страница продукта', en: 'Product Page' },
              [
                [
                  {
                    ru: ['Битая цена', 'Размещение «битой» цены (ежемесячного платежа при максимальном периоде оплаты) в карточке товара существенно увеличивает конверсию в покупку и средний чек. Клик на битую цену ведёт на форму регистрации, заполнив которую можно сразу получить сумму доступного аванса.'],
                    en: ['Split price', 'Showing your shopper the price per month on the product card significantly increases basket size and conversion.  A click on the split price opens the registration iframe form, which allows the customer to know how much she can spend in your store.']
                  },
                  'item-mokka-price'
                ],
                [
                  {
                    ru: ['Поп-ап', 'При клике на знак "?" появлется поп-ап. В нем указаны основные преимущества сервиса Мокка, а также доступный период оплаты аванса, сумма переплаты в месяц и сумма минимальной покупки в соответствии с актуальными коммерческими условиями.'],
                    en: ['Pop Up', 'By clicking on the "?" sign, Mokka pop-up appears. It summarizes key points about how the service works and its benefits for the shopper.']
                  },
                  'mokka-info-button,mokka-item-popup'
                ],
              ],
              {
                ru: 'Это одна из ключевых точек контакта. Размещение на ней информации о Мокка позволяет существенно увеличить ваши конверсии в покупки и средний чек корзины.',
                en: 'This is one of the key steps in your shopper’s journey.  Help them fill their basket and increase average check by placing info about Mokka buy now pay later here.'
              }
            ],
            cart: [
              :cart,
              { ru: 'корзина', en: 'Check-out' },
              [
                [
                  {
                    ru: ['Строка способа оплаты', 'Правильная формулировка для указания Мокка в способах оплаты следующая: «Мокка – оплата авансом». Также возможно размещение логотипа Мокка рядом с текстовой строкой.'],
                    en: ['Payment methods', 'Mokka logo should be placed among payment methods to allow shoppers to easily recognize and select it at check-out.  For registered customers who previously paid with Mokka, this payment method should be pre-selected at check-out to improve conversion.']
                  },
                  'mokka-cart-info'
                ],
                [
                  {
                    ru: ['Оформление покупки', 'Чтобы оформить покупку с авансом Мокка, надо выбрать Мокка в способах оплаты и кликнуть на кнопку «ОФОРМИТЬ». Далее клиенту потребуется ввести номер телефона, указанный при регистрации, подтвердить его СМС-кодом и перейти на форму оформления заказа с Мокка.<br/><br/>На этой форме клиент выбирает удобный график оплаты частями и подтверждает покупку СМС-кодом. При необходимости клиент может частично оплатить покупку своей банковской картой.'],
                    en: ['Check-out', 'Selecting Mokka as payment method at check-out will allow repeat customers to check-out quickly, confirming their purchase with an SMS code sent to their phone.  A new customer may also select Mokka at check-out and proceed to quickly register via Mokka registration iframe form.']
                  },
                  'cart-submit-button'
                ],
              ],
              {
                ru: 'Размещение информации о Мокка на этом финальном этапе позволяет не потерять клиентов и увеличить конверсии в покупки.',
                en: 'Placing information about Mokka at check-out allows customers to select Buy Now Pay Later as their preferred payment method.'
              }
            ],
            done: [
              :done,
              { ru: 'подтверждение заказа', en: 'Order confirmation' },
              [
                [
                  {
                    ru: ['Текст с подтверждением', 'Стандартный экран подтверждения заказа, с текстом “Заказ оплачен авансом Мокка”'],
                    en: ['Text with confirmation', 'Standard order confirmation screen: “Your order is paid with Mokka”']
                  },
                  'done-text'
                ]
              ],
              {
                ru: 'Последний экран, на котором клиент видит&nbsp;подтверждение своего заказа и&nbsp;информацию о том, что заказ оплачен авансом Мокка.',
                en: 'Include Mokka in your order confirmation to let the client know that they selected Mokka Pay with Advance as their payment method'
              }
            ]
          }
        end

        def self.landing_how
          {
            app: {
              ru: 'Получай аванс прямо в&nbsp;магазине или регистрируйся в&nbsp;приложении. Без&nbsp;ожидания и&nbsp;справок',
              en: 'Register now with 2 click Mokka application and find out how much you can spend. No&nbsp;waiting, no&nbsp;papers!'
            },
            buy: {
              ru: 'Наполняй корзину понравившимися товарами, и&nbsp;выбирай способ оплаты «Мокка — оплата авансом»',
              en: 'Fill your cart and choose “Mokka — Pay with Advance” at the&nbsp;check-out'
            },
            schedule: {
              ru: 'Выбирай удобный график платежей и&nbsp;оплачивай равными частями без скрытых комиссий и&nbsp;процентов',
              en: 'We’ll remind you about your billing date. No&nbsp;hidden fees and&nbsp;charges'
            }
          }
        end

        def self.landing_faq
          [
            {
              ru: ['Как это работает?', 'Оформи услугу оплаты авансом за 1 минуту. Наполни корзину покупками и при оформлении заказа выбери «Мокка — оплата авансом».'],
              en: ['How does Mokka work?', 'Register in Mokka in 1 minute. Fill your basket and choose ‘Mokka’ at check-out.']
            },
            {
              ru: ['Могу ли я вернуть сумму покупки раньше?', 'Да. Ты можешь вернуть всю сумму или остаток в любое время без штрафов.'],
              en: ['Can I pay for my purchase made with Mokka earlier?', 'Yes, you can pay for your purchases at any time with no additional fees.']
            },
            {
              ru: ['Можно ли вернуть товар, купленный с авансом?', 'Да. Ты можешь вернуть товар купленный с Мокка в соответствии с условиями возврата продавца.'],
              en: ['Can I return the items bought with Mokka?', 'Yes, you make returns as usual according to the terms of your store.  Your store will notify us about any returns and we will adjust your pay later schedule accordingly.']
            },
            {
              ru: ['Могу ли я использовать скидки и купоны?', 'Да. Скидки и купоны ты можешь использовать при оформлении заказа.'],
              en: ['Can I use discounts and promo codes?', 'Yes, you use any discounts and promo codes when making your order per your store’s policy.']
            },
            {
              ru: ['Как и где оплатить?', 'Ты можешь оплатить банковской картой, наличными или воспользоваться онлайн-банкингом.'],
              en: ['How can I pay Mokka what I owe?', 'Mokka will send you a reminder about your upcoming payments.  You can pay in your Mokka mobile app using any debit or credit card or another convenient payment method.']
            }
          ]
        end

        def self.popup_faq
          landing_faq + [
            {
              ru: ['Сколько стоит регистрация?', 'Регистрация в Мокка абсолютно бесплатная.'],
              en: ['How much does registration cost?', 'Registration in Mokka is absolutely free.']
            },
            {
              ru: ['Кому доступна регистрация в сервисе?', 'Всем гражданам РФ старше 18 лет.'],
              en: ['Who can register in service?', 'Any citizen older achieved 18 years of age.']
            }
          ]
        end

        def self.mokka_popup
          {
            app: {
              ru: 'Получай аванс прямо в&nbsp;магазине или регистрируйся в&nbsp;приложении. Без ожидания и&nbsp;справок',
              en: 'Register with Mokka and get your advance instantly. No waiting, no papers!'
            },
            buy: {
              ru: 'Наполняй корзину понравившимися товарами, и&nbsp;выбирай способ оплаты «Мокка — оплата авансом»',
              en: 'Fill your  cart and choose “Mokka — Pay with Advance” at check-out',
            },
            schedule: {
              ru: 'Выбирай удобный график платежей и&nbsp;оплачивай равными частями без скрытых комиссий и&nbsp;процентов',
              en: 'We’ll remind about your billing date. No hidden fees and charges'
            }
          }
        end
      end
    end
  end
end

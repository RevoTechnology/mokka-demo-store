json.meta do
  json.content render(partial: 'popups/pay2', formats: :html)
  json.faq render(partial: 'popups/faq', formats: :html)
  json.components ['calculator']
  json.max_width '40rem'
end

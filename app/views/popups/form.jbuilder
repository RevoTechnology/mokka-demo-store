json.meta do
  json.content render(partial: 'popups/form', formats: :html)
  json.faq render(partial: 'popups/faq', formats: :html)
end

FROM ruby:2.6.5

ENV RAILS_ENV=production
ENV LANG C.UTF-8
ENV BUNDLE_PATH /usr/local/bundle

WORKDIR /app
COPY Gemfile* ./
COPY package.json ./
COPY .ruby-version ./

# Install frontend stuff
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  apt-get install -y nodejs locales && \
  rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y sqlite3
RUN gem install bundler
RUN npm i -g yarn
RUN bundle install
COPY . .
RUN bundle exec rails assets:precompile
RUN bundle exec rails db:create
RUN bundle exec rails db:migrate
RUN yarn
EXPOSE 3000
CMD ["bundle", "exec", "rails", "s", "-b", "0.0.0.0"]

# syntax=docker/dockerfile:1
FROM ruby:2.6.3

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client postgis
# Add Yarn repository
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
# Update
RUN apt-get update -y
# Install Yarn
RUN apt-get install yarn -y

WORKDIR /myapp
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock
# Install & run bundler
RUN gem install bundler:'~> 2.1.4'
RUN bundle install
RUN yarn install
RUN rails webpacker:install
RUN yarn install --check-files

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]
require_relative 'boot'

require 'rails/all'
# config.assets.enabled = true
# config.assets.paths << "#{Rails.root}/app/assets/fonts"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module FoodChangeMedia
  class Application < Rails::Application
    config.assets.paths << Rails.root.join("app", "assets", "fonts")
    config.assets.enabled = true
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end

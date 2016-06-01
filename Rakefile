require 'rake'
require "sinatra/activerecord/rake"
require './app_config'
require ::File.expand_path('../config/environment', __FILE__)

desc 'Retrieves the current schema version number'
task "db:version" do
  puts "Current version: #{ActiveRecord::Migrator.current_version}"
end

desc 'populate the contact database'
task "db:populate" do
  AppConfig.establish_connection
  ContactImporter.populate
end


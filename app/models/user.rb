class User < ApplicationRecord
  validates :password, presence: true
  validates :name, presence: true, length: { minimum: 3, maximum: 100 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :units, presence: true
  validates :target, presence: true
end

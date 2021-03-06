class User < ApplicationRecord
  has_secure_password
  has_many :readings
  validates :name, presence: true, length: { minimum: 3, maximum: 100 }
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
  validates :password, confirmation: true, presence: true, length: { minimum: 6, maximum: 15 }
  validates :units, presence: true
  validates :target, presence: true
end

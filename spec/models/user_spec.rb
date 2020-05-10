require 'rails_helper'

RSpec.describe User, type: :model do
  before :each do
    User.create(name: 'test', email: 'test@test.com', password: "foobar", password_confirmation: "foobar")
  end

  describe '#name' do
    before :each do
      User.create(name: 'test', email: 'test@test.com', password: "foobar", password_confirmation: "foobar")
    end
    it 'doesnt take user without the name' do
      user = User.new
      user.name = nil
      user.valid?
      expect(user.errors[:name]).to include("can't be blank")

      user.name = 'test'
      user.valid?
      expect(user.errors[:name]).to_not include("can't be blank")
    end
  end

  describe '#email' do
    it 'validates for presence of email adress' do
      user = User.new
      user.name = 'test3334'
      user.email = ''
      user.valid?
      expect(user.errors[:email]).to include("can't be blank")

      user.email = 'test3334@gmail.com'
      user.valid?
      expect(user.errors[:email]).to_not include("can't be blank")
    end

    it 'validates for format of email adress' do
      user = User.new
      user.name = 'test9999'
      user.email = 'testtest..com'
      user.valid?
      expect(user.errors[:email]).to include('is invalid')

      user.email = 'test9999@gmail.com'
      user.valid?
      expect(user.errors[:email]).to_not include('is valid')
    end

  it 'validates email uniqueness' do
      user = User.new
      user.name = 'test'
      user.email = 'test@test.com'
      user.password = 'foobar'
      user.valid?
      expect(user.errors[:email]).to_not include('has already been taken')

      user.name = 'greenpeace'
      user.email = 'greenpeace@test.com'
      expect(user.errors[:email]).to_not include('accepted')
      
    end
  end

  describe '#password' do
    it 'validates the presence of password' do
      user = User.new
      user.name = 'test12'
      user.email = 'test12@test.com'
      user.password = ''
      user.valid?
      expect(user.errors[:password]).to include("can't be blank")

      user.password = '123456'
      expect(user.errors[:password]).to_not eql(false)
    end

    it 'validates the password confirmation' do
      user = User.new
      user.name = 'test13'
      user.email = 'test13@test.com'
      user.password = '1234567'
      user.password_confirmation = '123456'
      user.valid?
      expect(user.errors[:password_confirmation]).to include("doesn't match Password")

      user.password_confirmation = '1234567'
      expect(user.errors[:password_confirmation]).to_not eql(false)
    end

    it 'validates the wrong password length' do
      user = User.new
      user.name = 'test12'
      user.email = 'test12@test.com'
      user.password = '1'
      user.valid?
      expect(user.errors[:password]).to include("is too short (minimum is 6 characters)")
      
      user.password_confirmation = '123'
      expect(user.valid?).to eql(false)      
    end
  end
end

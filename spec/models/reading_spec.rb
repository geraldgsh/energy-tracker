require 'rails_helper'

RSpec.describe Reading, type: :model do
  before :each do
    @user = User.create(name: 'test', email: 'test@test.com', password: 'foobar')
  end
  describe 'content' do
    it 'should not be empty' do
      @reading = @user.readings.build(bedroom: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:bedroom]).to include("can't be blank")
    end
    it 'should not be empty' do
      @reading = @user.readings.build(study: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:study]).to include("can't be blank")
    end
    it 'should not be empty' do
      @reading = @user.readings.build(garage: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:garage]).to include("can't be blank")
    end
    it 'should not be empty' do
      @reading = @user.readings.build(living: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:living]).to include("can't be blank")
    end
    it 'should not be empty' do
      @reading = @user.readings.build(kitchen: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:kitchen]).to include("can't be blank")
    end
    it 'should not be empty' do
      @reading = @user.readings.build(guest: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:guest]).to include("can't be blank")
    end
    it 'should not be empty' do
      @reading = @user.readings.build(consumption: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:consumption]).to include("can't be blank")
    end
    it 'should not be empty' do
      @reading = @user.readings.build(available: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:available]).to include("can't be blank")
    end
    it 'should not be empty' do
      @reading = @user.readings.build(saved: '')
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:saved]).to include("can't be blank")
    end
    it 'should have an user' do
      @reading = Reading.new(bedroom: 'A' * 10)
      expect(@reading.valid?).to eql(false)
      expect(@reading.errors.messages[:user]).to include('must exist')
    end
  end
end

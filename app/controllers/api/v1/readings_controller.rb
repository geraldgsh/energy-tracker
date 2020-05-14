class Api::V1::ReadingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :logged_in?

  def index
    @reading = Reading.all
    if @reading
      render json: {
        code: 200,
        data: Reading.all.as_json
      }
    else
      render json: @reading.errors
    end
  end

  def create
    @reading = current_user.readings.build(reading_params)
    if @reading.save
      render json: {
        code: 200
      }
    else
      render json: {
        code: 400,
        errors: @user.errors.messages
      }
    end
  end

  def show
    @readings = Reading.all
    @readings = Reading.find(params[:id])
    if @readings
      render json: {
        code: 200,
        data: @readings.as_json
      }
    else
      render json: @readings.errors
    end
  end

  def destroy; end

  def find_readings
    @readings = Reading.all
    @readings = Reading.find(params[:id])
    if @readings
      render json: {
        code: 200,
        data: @readings.as_json
      }
    else
      render json: @readings.errors
    end
  end

  def list_readings_by_user
    @readingList = Reading.all
    @readingList = Reading.where(user_id: params[:id])
    if @readingList
      render json: {
        code: 200,
        data: @readingList.as_json
      }
    else
      render json: @readingList.errors
    end
  end

  def list_reading
    @reads = Reading.all
    @reads = Reading.find_by(user_id: params[:user_id], id: params[:id])
    if @reads
      render json: {
        code: 200,
        data: @reads.as_json
      }
    else
      render json: @reads.errors
    end
  end

  private

  def reading_params
    params.require(:reading).permit(
      :bedroom,
      :study,
      :garage,
      :living,
      :kitchen,
      :guest,
      :consumption,
      :available,
      :saved
    )
  end

  def reading
    @reading ||= Reading.find_by_user_id_and_id(params[:user_id], params[:id])
  end
end

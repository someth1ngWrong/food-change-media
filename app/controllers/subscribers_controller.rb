class SubscribersController < ApplicationController
  def index
    @subscribers = Subscriber.all
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)
    if @subscriber.save
      redirect_to partners_index_path, notice: "Заявка отправлена!"
    else
      redirect_to partners_index_path, notice: "Некорректный адрес"
    end
  end

  private

    def subscriber_params
      params.require(:subscriber).permit(:email)
    end
end

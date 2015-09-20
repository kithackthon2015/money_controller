class PaymentController < ApplicationController
  def create
    @payment = Payment.new(payment_params)
    @money = Money.find(@payment.user_id)
if @payment.save
    @money.money -= @payment.pay
    @money.save
  render :action => 'new', notice: '追加しました'
else
  render :action => 'new'
end
  end
  def new
      @payment = Payment.new
  end
  private
    def payment_params
      params.require(:payment).permit(:user_id, :pay)
    end
end

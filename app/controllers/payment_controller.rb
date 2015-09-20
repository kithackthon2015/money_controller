class PaymentController < ApplicationController
  def create
    @payment = Payment.new(payment_params)
if @payment.save
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

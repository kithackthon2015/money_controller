class CreateMoney < ActiveRecord::Migration
  def change
    create_table :money do |t|
      t.integer :money
      t.timestamps null: false
    end
  end
end

class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :UserID
      t.integer :target
      t.string :name
      t.boolean :sex
      t.integer :salary
      t.string :picture
      t.timestamps
    end
  end
end

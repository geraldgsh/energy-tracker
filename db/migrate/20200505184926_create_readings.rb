class CreateReadings < ActiveRecord::Migration[6.0]
  def change
    create_table :readings do |t|
      t.string :bedroom
      t.string :integer
      t.string :study
      t.string :integer
      t.string :garage
      t.string :integer
      t.string :living
      t.string :integer
      t.string :kitchen
      t.string :integer
      t.string :guest
      t.string :integer
      t.string :consumption
      t.string :integer
      t.string :available
      t.string :integer
      t.string :saved
      t.string :integer

      t.timestamps
    end
  end
end

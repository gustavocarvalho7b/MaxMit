class CreateExercicios < ActiveRecord::Migration[8.0]
  def change
    create_table :exercicios do |t|
      t.string :titulo
      t.string :descricao
      t.string :link_video

      t.timestamps
    end
  end
end

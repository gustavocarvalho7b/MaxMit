class CreateAlunos < ActiveRecord::Migration[8.0]
  def change
    create_table :alunos do |t|
      t.string :nome
      t.integer :telefone
      t.string :email
      t.string :cpf
      t.binary :foto
      t.date :data_nascimento
      t.date :ultimo_pagamento
      t.integer :ultima_avaliacao_id
      t.string :valor
      t.boolean :ativo
      t.integer :turma_id
      t.date :data_inicio
      t.integer :modalidade_id
      t.integer :turma_id

      t.timestamps
    end
  end
end

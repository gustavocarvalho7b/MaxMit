# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_09_03_193058) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "alunos", force: :cascade do |t|
    t.string "nome"
    t.integer "telefone"
    t.string "email"
    t.string "cpf"
    t.binary "foto"
    t.date "data_nascimento"
    t.date "ultimo_pagamento"
    t.integer "ultima_avaliacao_id"
    t.string "valor"
    t.boolean "ativo"
    t.bigint "turma_id"
    t.date "data_inicio"
    t.integer "modalidade_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["turma_id"], name: "index_alunos_on_turma_id"
  end

  create_table "exercicios", force: :cascade do |t|
    t.string "titulo"
    t.string "descricao"
    t.string "link_video"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
end

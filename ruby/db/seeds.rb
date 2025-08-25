# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require 'faker'

20.times do
  Aluno.create!(
    nome: Faker::Name.name,
    telefone: Faker::PhoneNumber.cell_phone,
    email: Faker::Internet.email,
    cpf: Faker::IdNumber.brazilian_citizen_number(formatted: true),
    data_nascimento: Faker::Date.birthday(min_age: 18, max_age: 60),
    ultimo_pagamento: Faker::Date.backward(days: 30),
    ultima_avaliacao_id: Faker::Number.between(from: 1, to: 10),
    valor: Faker::Number.between(from: 80, to: 200).to_s,
    ativo: [true, false].sample,
    turma_id: Faker::Number.between(from: 1, to: 5),
    data_inicio: Faker::Date.backward(days: 365),
    modalidade_id: Faker::Number.between(from: 1, to: 3)
  )
end
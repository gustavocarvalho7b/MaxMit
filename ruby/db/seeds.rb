# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
20.times do
  Exercicio.create!(
    titulo: Faker::Educator.subject,
    descricao: Faker::Lorem.paragraph(sentence_count: 2),
    link_video: "https://www.youtube.com/watch?v=#{Faker::Alphanumeric.alphanumeric(number: 11)}"
  )
end

20.times do
  Aluno.create!(
    nome: Faker::Name.name,
    telefone: Faker::Number.number(digits: 9),
    email: Faker::Internet.unique.email,
    cpf: Faker::IdNumber.brazilian_citizen_number(formatted: true),
    foto: nil,
    data_nascimento: Faker::Date.birthday(min_age: 18, max_age: 60),
    ultimo_pagamento: Faker::Date.backward(days: 60),
    ultima_avaliacao_id: Faker::Number.between(from: 1, to: 10),
    valor: Faker::Commerce.price(range: 100.0..300.0).to_s,
    ativo: Faker::Boolean.boolean,
    turma_id: Faker::Number.between(from: 1, to: 5),
    data_inicio: Faker::Date.backward(days: 365),
    modalidade_id: Faker::Number.between(from: 1, to: 3)
  )
end
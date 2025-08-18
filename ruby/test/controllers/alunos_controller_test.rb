require "test_helper"

class AlunosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @aluno = alunos(:one)
  end

  test "should get index" do
    get alunos_url, as: :json
    assert_response :success
  end

  test "should create aluno" do
    assert_difference("Aluno.count") do
      post alunos_url, params: { aluno: { ativo: @aluno.ativo, cpf: @aluno.cpf, data_inicio: @aluno.data_inicio, data_nascimento: @aluno.data_nascimento, email: @aluno.email, foto: @aluno.foto, modalidade_id: @aluno.modalidade_id, nome: @aluno.nome, telefone: @aluno.telefone, turma_id_id: @aluno.turma_id_id, ultima_avaliacao_id: @aluno.ultima_avaliacao_id, ultimo_pagamento: @aluno.ultimo_pagamento, valor: @aluno.valor } }, as: :json
    end

    assert_response :created
  end

  test "should show aluno" do
    get aluno_url(@aluno), as: :json
    assert_response :success
  end

  test "should update aluno" do
    patch aluno_url(@aluno), params: { aluno: { ativo: @aluno.ativo, cpf: @aluno.cpf, data_inicio: @aluno.data_inicio, data_nascimento: @aluno.data_nascimento, email: @aluno.email, foto: @aluno.foto, modalidade_id: @aluno.modalidade_id, nome: @aluno.nome, telefone: @aluno.telefone, turma_id_id: @aluno.turma_id_id, ultima_avaliacao_id: @aluno.ultima_avaliacao_id, ultimo_pagamento: @aluno.ultimo_pagamento, valor: @aluno.valor } }, as: :json
    assert_response :success
  end

  test "should destroy aluno" do
    assert_difference("Aluno.count", -1) do
      delete aluno_url(@aluno), as: :json
    end

    assert_response :no_content
  end
end

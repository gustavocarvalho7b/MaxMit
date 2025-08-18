class AlunosController < ApplicationController
  before_action :set_aluno, only: %i[ show update destroy ]

  # GET /alunos
  def index
    @alunos = Aluno.all

    render json: @alunos
  end

  # GET /alunos/1
  def show
    render json: @aluno
  end

  # POST /alunos
  def create
    @aluno = Aluno.new(aluno_params)

    if @aluno.save
      render json: @aluno, status: :created, location: @aluno
    else
      render json: @aluno.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /alunos/1
  def update
    if @aluno.update(aluno_params)
      render json: @aluno
    else
      render json: @aluno.errors, status: :unprocessable_entity
    end
  end

  # DELETE /alunos/1
  def destroy
    @aluno.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_aluno
      @aluno = Aluno.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def aluno_params
      params.expect(aluno: [ :nome, :telefone, :email, :cpf, :foto, :data_nascimento, :ultimo_pagamento, :ultima_avaliacao_id, :valor, :ativo, :turma_id_id, :data_inicio, :modalidade_id, :turma_id_id ])
    end
end

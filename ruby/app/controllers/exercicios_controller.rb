class ExerciciosController < ApplicationController
  before_action :set_exercicio, only: %i[ show update destroy ]

  # GET /exercicios
  def index
    @exercicios = Exercicio.all

    render json: @exercicios
  end

  # GET /exercicios/1
  def show
    render json: @exercicio
  end

  # POST /exercicios
  def create
    @exercicio = Exercicio.new(exercicio_params)

    if @exercicio.save
      render json: @exercicio, status: :created, location: @exercicio
    else
      render json: @exercicio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /exercicios/1
  def update
    if @exercicio.update(exercicio_params)
      render json: @exercicio
    else
      render json: @exercicio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /exercicios/1
  def destroy
    @exercicio.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exercicio
      @exercicio = Exercicio.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def exercicio_params
      params.expect(exercicio: [ :titulo, :descricao, :link_video ])
    end
end

require "test_helper"

class ExerciciosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exercicio = exercicios(:one)
  end

  test "should get index" do
    get exercicios_url, as: :json
    assert_response :success
  end

  test "should create exercicio" do
    assert_difference("Exercicio.count") do
      post exercicios_url, params: { exercicio: { descricao: @exercicio.descricao, link_video: @exercicio.link_video, titulo: @exercicio.titulo } }, as: :json
    end

    assert_response :created
  end

  test "should show exercicio" do
    get exercicio_url(@exercicio), as: :json
    assert_response :success
  end

  test "should update exercicio" do
    patch exercicio_url(@exercicio), params: { exercicio: { descricao: @exercicio.descricao, link_video: @exercicio.link_video, titulo: @exercicio.titulo } }, as: :json
    assert_response :success
  end

  test "should destroy exercicio" do
    assert_difference("Exercicio.count", -1) do
      delete exercicio_url(@exercicio), as: :json
    end

    assert_response :no_content
  end
end

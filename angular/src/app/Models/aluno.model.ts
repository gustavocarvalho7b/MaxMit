export interface Aluno {
  id: number;
  nome: string;
  telefone?: number;
  email?: string;
  cpf?: string;
  foto?: string | null;
  data_nascimento?: string;
  ultimo_pagamento?: string;
  ultima_avaliacao_id?: number;
  valor?: string;
  ativo: boolean;
  turma_id?: number;
  data_inicio?: string;
  modalidade_id?: number;
}

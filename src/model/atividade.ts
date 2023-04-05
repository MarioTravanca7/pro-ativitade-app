export enum Prioridade{
  NaoDefinido = 'NaoDefinido',
  Baixa = 'Baixa',
  Normal = 'Normal',
  Alta = 'Alta'
}

export interface IAtividade {
    id: number;
    prioridade: string;
    titulo: string;
    descricao: string;
  }

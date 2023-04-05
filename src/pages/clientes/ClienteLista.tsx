import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import { useNavigate } from "react-router-dom";

const clientes = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Otto",
    contato: "123345",
    situacao: "Ativo",
  },
  {
    id: 2,
    nome: "Google",
    responsavel: "Robert",
    contato: "129045",
    situacao: "Ativo",
  },
  {
    id: 3,
    nome: "Facebook",
    responsavel: "Rony",
    contato: "1239095",
    situacao: "Ativo",
  },
  {
    id: 4,
    nome: "Twitter",
    responsavel: "Mary",
    contato: "145895",
    situacao: "Em Analise",
  },
  {
    id: 5,
    nome: "Amazon",
    responsavel: "jack",
    contato: "131245",
    situacao: "Desativado",
  },
];

const ClienteLista = () => {
  const navigate = useNavigate();
  const [termoBusca, setTermoBusca] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermoBusca(e.target.value);
    // console.log(termoBusca);
  };
  // cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1 ||
  // cliente.responsavel.toLocaleLowerCase().indexOf(termoBusca) !== -1

  const clientesFiltrados = clientes.filter((cliente) => {
    return Object.values(cliente)
      .join(" ")
      .toLowerCase()
      .includes(termoBusca.toLowerCase());
  });

  const novoCliente = () => {
    navigate("/cliente/detalhe");
  };

  return (
    <>
      <TitlePage title="Cliente Lista">
        <Button variant="outline-secondary" onClick={novoCliente}>
          <i className="fas fa-plus me-2"></i>
          Novo Cliente
        </Button>
      </TitlePage>
      <InputGroup className="mt-3 mb-3">
        <InputGroup.Text>Pesquisar:</InputGroup.Text>
        <FormControl
          onChange={handleInputChange}
          placeholder="Buscar por nome do cliente"
        />
      </InputGroup>
      <table className="table table-striped table-over">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Responsavel</th>
            <th scope="col">Contato</th>
            <th scope="col">Situacao</th>
            <th scope="col">Õpcoes</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.responsavel}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.situacao}</td>
              <td>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => navigate(`/cliente/detalhe/${cliente.id}`)}
                  >
                    <i className="fas far-user-edit me-2"></i>Editar
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    Desativar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ClienteLista;

import { useEffect, useState } from "react";
import { MdOutlineEdit, MdOutlinePrint } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ClientInfo } from "../../components/ClientInfo";
import { Header } from "../../components/Header";
import { useClients } from "../../helpers/hooks/useClients";
import { Container, DeleteButton, DeleteModal, OptionsContainer, Overlay } from "./styles";

export const Client = () => {
  const { state, currClient, getClient, deleteClient, resetState } = useClients();
  const [isModal, setIsModal] = useState(false);
  const path = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();

  useEffect(() => {
    getClient(path);
  }, [getClient, path]);

  useEffect(() => {
    if (state.isSuccess) {
      console.log('success', true);
      navigate("/")
      window.location.reload();
      resetState();
    }
  }, [state, navigate, resetState]);

  const handleDeleteClick = () => {
    setIsModal(true);
  };

  const handleConfirmClick = () => {
    deleteClient(path);
  };

  const handleDenyClick = () => {
    setIsModal(false);
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Dados Cadastrais</h1>

        <OptionsContainer>
          <Link to={"/client/edit/" + path}>
            <MdOutlineEdit />
          </Link>
          <button><MdOutlinePrint /></button>
        </OptionsContainer>

        <ClientInfo currClient={currClient} />

        <DeleteButton onClick={handleDeleteClick}>Excluir</DeleteButton>

        {isModal && (
          <>
            <DeleteModal>
              <span>
                Você realmente deseja excluir os dados cadastrais desse cliente?
              </span>
              <div>
                <button onClick={handleConfirmClick}>Sim</button>
                <button onClick={handleDenyClick}>Não</button>
              </div>
            </DeleteModal>
            <Overlay />
          </>
        )}
      </Container>
    </>
  );
};
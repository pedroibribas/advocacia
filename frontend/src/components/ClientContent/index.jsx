import { useState } from "react";
import { MdOutlinePrint } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { ClientData } from "./ClientData";
import { EditButton } from "./EditButton";
import { Container, Content, DeleteButton, Modal, OptionsContainer, Overlay } from "./styles";

//TODO
// - Modal
// - Exclusão do cadastro
// - Botão de geração do pdf

export const ClientContent = () => {
  const { deleteClient } = useClients();

  const [isModal, setIsModal] = useState(false);

  const path = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setIsModal(true);
  };

  const handleDenyClick = () => {
    setIsModal(false);
  };

  const handleConfirmClick = async () => {
    await deleteClient(path);
    navigate('/');
    window.location.reload();
  };

  return (
    <Container>
      <Content>
        <OptionsContainer>
          <EditButton />
          <button><MdOutlinePrint /></button>
        </OptionsContainer>

        <ClientData />

        <DeleteButton onClick={handleDeleteClick}>
          Excluir
        </DeleteButton>
      </Content>

      {isModal && (
        <>
          <Overlay />
          <Modal>
            <span>
              Você realmente deseja excluir os dados cadastrais desse cliente?
            </span>
            <div>
              <button onClick={handleConfirmClick}>Sim</button>
              <button onClick={handleDenyClick}>Não</button>
            </div>
          </Modal>
        </>
      )}
    </Container>
  );
};
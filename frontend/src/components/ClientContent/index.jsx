import { useEffect, useState } from "react";
import { MdOutlinePrint } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { getPDFAPIHandler } from "../../api/services/pdf";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { ClientData } from "./ClientData";
import { EditButton } from "./EditButton";
import { Container, Content, DeleteButton, Modal, OptionsContainer, Overlay } from "./styles";

export const ClientContent = () => {
  const { client, getClient, deleteClient } = useClients();

  const [isModal, setIsModal] = useState(false);

  const path = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();

  useEffect(() => {
    getClient(path);
  }, [getClient, path]);

  const handleSavePDF = () => {
    return getPDFAPIHandler(client).then(res => {
      const blob = new Blob([res], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'document.pdf';
      link.click();
    }).catch(err => console.log(err));
  };

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
          <button onClick={handleSavePDF}>
            <MdOutlinePrint />
          </button>
        </OptionsContainer>

        <ClientData client={client} />

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
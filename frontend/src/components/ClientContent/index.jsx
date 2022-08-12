import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getPDFAPIHandler } from "../../api/services/pdf";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { ConfirmAlert } from "../ModalComponents/ConfirmAlert";
import { LoadingAlert } from "../ModalComponents/LoadingAlert";
import { ClientData } from "./ClientData";
import { ButtonsContainer, Container, Content, DeleteButton, EditButton, PDFButton } from "./styles";

export const ClientContent = () => {
  const { client, getClient, deleteClient } = useClients();

  const [isLoading, setIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const path = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();

  useEffect(() => {
    getClient(path);
  }, [getClient, path]);

  // Save PDF Handler
  const handleSavePDF = () => {
    setIsLoading(true);

    return getPDFAPIHandler(client).then(res => {
      const blob = new Blob([res], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'document.pdf';
      link.click();

      setIsLoading(false);
    }).catch(err => {
      setIsLoading(false);
      console.log(err);
    });
  };

  // Delete Handler
  const handleDeleteClick = () => {
    setIsModal(true);
  };

  // Modal Handlers

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleConfirm = async () => {
    await deleteClient(path);
    navigate('/');
    window.location.reload();
  };

  return (
    <Container>
      <Content>
        <ButtonsContainer>
          <EditButton>
            <Link to={'/client/edit/' + path}>Editar</Link>
          </EditButton>
          <DeleteButton onClick={handleDeleteClick}>Excluir</DeleteButton>
        </ButtonsContainer>
        <ClientData client={client} />
        <PDFButton onClick={handleSavePDF}>Download PDF</PDFButton>
      </Content>

      {isLoading && (
        <LoadingAlert text={'O documento está sendo preparado'} />
      )}

      {isModal && (
        <ConfirmAlert
          text="Você confirma a exclusão dos dados cadastrais?"
          handleClose={handleCloseModal}
          handleConfirm={handleConfirm}
        />
      )}
    </Container>
  )
};
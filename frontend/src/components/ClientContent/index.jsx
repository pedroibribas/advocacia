import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getPDFAPIHandler } from "../../api/services/pdf";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { reset } from "../../helpers/reducers/ClientStatesReducer";
import { ConfirmAlert } from "../ModalComponents/ConfirmAlert";
import { Loader } from "../ModalComponents/Loader";
import { LoadingAlert } from "../ModalComponents/LoadingAlert";
import { ClientData } from "./ClientData";
import { ButtonsContainer, Container, Content, DeleteButton, EditButton, PDFButton } from "./styles";

export const ClientContent = () => {
  const { clientStatesState, dispatchClientStates, client, getClients, getClient, deleteClient } = useClients();
  const { isError, isSuccess, message } = clientStatesState;
  const [clientIsLoading, setClientIsLoading] = useState(false);
  const [PDFIsLoading, setPDFIsLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const path = useLocation().pathname.split('/')[2];
  const navigate = useNavigate();

  useEffect(() => {
    if (!client) {
      getClient(path);
      setClientIsLoading(true);
    } else {
      setClientIsLoading(false);
    };
  }, [getClient, path, client]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatchClientStates(reset());
    };

    if (isSuccess) {
      toast.success(message);
      dispatchClientStates(reset());
      getClients();
      navigate("/");
    };
  }, [dispatchClientStates, isError, isSuccess, message, getClients, navigate]);

  // Save PDF Handler
  const handleSavePDF = async () => {
    setPDFIsLoading(true);
    return await getPDFAPIHandler(client).then(res => {
      const blob = new Blob([res], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'document.pdf';
      link.click();

      setPDFIsLoading(false);
    }).catch(err => {
      setPDFIsLoading(false);
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

      {clientIsLoading && (<Loader />)}

      {PDFIsLoading && (
        <LoadingAlert
          text={'O documento está sendo preparado'}
        />
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
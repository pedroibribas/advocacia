import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { reset } from "../../helpers/reducers/ClientStatesReducer";
import { validateFormData } from "../../helpers/utils/validators";
import { ConfirmAlert } from "../ModalComponents/ConfirmAlert";
import { EditForm } from "./EditForm";
import { Container } from "./styles";

export const EditContent = () => {
  const { client, getClient, clientStatesState, dispatchClientStates, updateClient } = useClients();
  const { isError, isSuccess, message } = clientStatesState;
  const [formData, setFormData] = useState({
    firstName: client?.name?.firstName,
    lastName: client?.name?.lastName,
    gender: client?.gender,
    civilStatus: client?.civilStatus,
    nationality: client?.nationality,
    job: client?.job,
    securityNumber: client?.securityNumber,
    rgNumber: client?.registerNumber?.rgNumber,
    rgOrigin: client?.registerNumber?.rgOrigin,
    birthDay: client?.birth?.birthDay,
    birthMonth: client?.birth?.birthMonth,
    birthYear: client?.birth?.birthYear,
    street: client?.address?.street,
    addressNumber: client?.address?.addressNumber,
    cityArea: client?.address?.cityArea,
    city: client?.address?.city,
    state: client?.address?.state,
    country: client?.address?.country,
    postalCode: client?.address?.postalCode,
    countryCode: client?.phone?.countryCode,
    areaCode: client?.phone?.areaCode,
    phoneNumber: client?.phone?.phoneNumber,
    email: client?.email,
    lawsuitNumber: client?.lawsuitNumber,
    description: client?.description,
  });
  const [isModal, setIsModal] = useState(false);
  const path = useLocation().pathname.split('/')[3];
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatchClientStates(reset());
    };

    if (isSuccess) {
      toast.success(message);
      dispatchClientStates(reset());
      getClient(path);
      navigate("/client/" + path);
    };
  }, [isError, isSuccess, message, dispatchClientStates, getClient, navigate, path]);


  // Form Handler
  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  // Modal Handlers

  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  const handleConfirm = async () => {
    validateFormData(formData);
    await updateClient(path, formData);
  };

  return (
    <Container>
      <EditForm
        formData={formData}
        path={path}
        handleChange={handleChange}
        handleOpenModal={handleOpenModal}
      />
      {isModal && (
        <ConfirmAlert
          text='Você confirma o envio dos dados atualizados?'
          handleClose={handleCloseModal}
          handleConfirm={handleConfirm}
        />
      )}
    </Container>
  );
};
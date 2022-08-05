import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { validateFormData } from "../../helpers/utils/validators";
import { Modal } from "../Modal";
import { EditForm } from "./EditForm";
import { Container } from "./styles";

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  gender: '',
  civilStatus: '',
  nationality: 'Brasileira',
  job: '',
  securityNumber: '',
  rgNumber: '',
  rgOrigin: '',
  birthDay: 1,
  birthMonth: 1,
  birthYear: 1900,
  street: '',
  addressNumber: 0,
  cityArea: '',
  city: '',
  state: 'SP',
  country: "Brasil",
  postalCode: '',
  countryCode: 55,
  areaCode: 0,
  phoneNumber: 0,
  email: '',
  lawsuitNumber: '',
  description: ''
};

export const EditContent = () => {
  // Form's
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Modal's
  const { updateClient } = useClients();
  const [isModal, setIsModal] = useState(false);
  const path = useLocation().pathname.split('/')[3];
  const navigate = useNavigate();

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
    navigate("/client/" + path);
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
        <Modal
          text='Você confirma o envio dos dados atualizados?'
          handleClose={handleCloseModal}
          handleConfirm={handleConfirm}
        />
      )}
    </Container>
  );
};
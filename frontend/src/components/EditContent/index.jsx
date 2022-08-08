import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { validateFormData } from "../../helpers/utils/validators";
import { Modal } from "../Modal";
import { EditForm } from "./EditForm";
import { Container } from "./styles";

export const EditContent = () => {
  const { client, updateClient } = useClients();
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
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { EditForm } from "./EditForm";
import { Container, Overlay, Modal } from "./styles";

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
  const { updateClient } = useClients();

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isModal, setIsModal] = useState(false);

  const path = useLocation().pathname.split('/')[3];
  const navigate = useNavigate();

  const handleOpenModalClick = () => {
    setIsModal(true);
  };

  const handleConfirmClick = async () => {
    const checkData = (obj) => {
      Object.keys(obj).forEach(key => {
        if (obj[key] === '') {
          obj[key] = 'Não informado';
        };
        return obj;
      });
    };

    checkData(formData);
    await updateClient(path, formData);
    navigate("/client/" + path);
  };

  const handleCloseModalClick = () => {
    setIsModal(false);
  };

  return (
    <Container>
      <EditForm
        formData={formData}
        setFormData={setFormData}
        path={path}
        handleOpenModalClick={handleOpenModalClick}
      />

      {isModal && (
        <>
          <Overlay onClick={handleCloseModalClick} />
          <Modal>
            <span>
              Você confirma o envio dos dados atualizados?
            </span>
            <div>
              <button onClick={handleConfirmClick}>Sim</button>
              <button onClick={handleCloseModalClick}>Não</button>
            </div>
          </Modal>
        </>
      )}
    </Container>
  );
};
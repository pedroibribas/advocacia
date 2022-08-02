import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useClients } from "../../helpers/hooks/useClients";
import { BirthDataSet } from "./BirthDataSet";
import { AddressDataSet } from "./AddressDataSet";
import { PersonalDataSet } from "./PersonalDataSet";
import { PhoneDataSet } from "./PhoneDataSet";
import { EmailDataSet } from "./EmailDataSet";
import { HistoricDataSet } from "./HistoricDataSet";
import { toast } from "react-toastify";

export const ClientForm = ({ children }) => {
  const { getClient, updateClient, currClient, state, resetState } = useClients();
  const [formData, setFormData] = useState({
    firstName: currClient?.name?.firstName,
    lastName: currClient?.name?.lastName,
    gender: currClient?.gender,
    civilStatus: currClient?.civilStatus,
    nationality: currClient?.nationality,
    job: currClient?.job,
    securityNumber: currClient?.securityNumber,
    rgNumber: currClient?.registerNumber?.rgNumber,
    rgOrigin: currClient?.registerNumber?.rgOrigin,
    birthDay: currClient?.birth?.birthDay,
    birthMonth: currClient?.birth?.birthMonth,
    birthYear: currClient?.birth?.birthYear,
    street: currClient?.address?.street,
    addressNumber: currClient?.address?.addressNumber,
    cityArea: currClient?.address?.cityArea,
    city: currClient?.address?.city,
    postalCode: currClient?.address?.postalCode,
    state: currClient?.address?.city,
    country: currClient?.address?.country,
    countryCode: currClient?.phone?.countryCode,
    areaCode: currClient?.phone?.areaCode,
    phoneNumber: currClient?.phone?.phoneNumber,
    email: currClient?.email,
    lawsuitNumber: currClient?.lawsuitNumber,
    description: currClient?.description,
  });
  const path = useLocation().pathname.split('/')[3];
  const navigate = useNavigate();

  useEffect(() => {
    getClient(path);
  }, [getClient, path]);

  useEffect(() => {
    if (state.isError) {
      toast.error(state.message);
      resetState();
    }
    if (state.isSuccess) {
      toast.success(state.message);
      navigate("/client/" + path);
      resetState();
    }
  }, [state, resetState, navigate, path]);

  const handleChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = e => {
    const checkData = (obj) => {
      Object.keys(obj).forEach(key => {
        // Change input value if it's ''
        if (obj[key] === '') {
          obj[key] = 'Não informado';
        };
        return obj;
      });
    };

    checkData(formData);
    updateClient(path, formData);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <PersonalDataSet formData={formData} handleChange={handleChange} />
      <BirthDataSet formData={formData} handleChange={handleChange} />
      <AddressDataSet formData={formData} handleChange={handleChange} />
      <PhoneDataSet formData={formData} handleChange={handleChange} />
      <EmailDataSet formData={formData} handleChange={handleChange} />
      <HistoricDataSet formData={formData} handleChange={handleChange} />
      {children}
    </form>
  );
};
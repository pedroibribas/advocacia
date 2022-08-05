export const validateFormData = dataObj => {
  Object.keys(dataObj).forEach(key => {
    if (dataObj[key] === '') {
      if (key === 'firstName' || key === 'lastName') {
        return (dataObj[key] = '');
      };

      dataObj[key] = 'Não informado';
    };

    return dataObj;
  });
};
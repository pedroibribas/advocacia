export const validateFormData = dataObj => {
  Object.keys(dataObj).forEach(key => {
    if (dataObj[key] === '') {
      if (key === 'firstName' || key === 'lastName') {
        return (dataObj[key] = '');
      };

      if (key === 'rgOrigin') {
        return (dataObj[key] = 'Nenhum');
      };

      if (key === 'email') {
        return (dataObj[key] = 'default@default.com');
      };

      if (key === 'description') {
        return (dataObj[key] = 'Nenhum histórico apresentado.');
      };

      dataObj[key] = 'Não informado';
    };

    return dataObj;
  });
};
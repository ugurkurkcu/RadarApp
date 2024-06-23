const checkValidation = (value) => {
  return !value || value === 0 || value === "" ? "Unknown" : value;
};

export default checkValidation;

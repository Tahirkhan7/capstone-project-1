export const validateForm = (name, username, email, mobile) => {
    let valid = true;
    let invalid = {
      name: false,
      username: false,
      email: false,
      mobile: false,
    };
  
    if (!name || !username || !email || !mobile) {
      valid = false;
      invalid = {
        name: !name,
        username: !username,
        email: !email,
        mobile: !mobile,
      };
    }
  
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mobileRegex = /^\d{10}$/;
  
    if (!emailRegex.test(email) || !mobileRegex.test(mobile)) {
      valid = false;
      invalid = {
        ...invalid,
        email: !emailRegex.test(email),
        mobile: !mobileRegex.test(mobile),
      };
    }
  
    return { valid, invalid };
  };
  
  export default validateForm;
  
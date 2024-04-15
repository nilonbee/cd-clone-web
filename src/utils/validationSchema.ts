const validationSchema = {
  first_name: {
    required: "First Name is required",
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
  },
  phone: {
    required: "Phone Number is required",
    pattern: {
      value: /^\+?[0-9]{8,13}$/,
      message: "Invalid phone number.",
    },
  },
};

export default validationSchema;

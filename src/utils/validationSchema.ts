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

  strongPassword: {
    required: "Password is required",
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      message:
        "Password must contain at least 8 characters, including UPPER/lowercase and numbers.",
    },
  },

  passwordConfirmation: {
    required: "Password Confirmation is required",
    validate: (value: string, values: any) => {
      if (value !== values.strongPassword) {
        return "Passwords do not match";
      }
      return true;
    },
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

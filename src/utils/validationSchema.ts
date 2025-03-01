const validationSchema = {
  first_name: {
    required: "First Name is required",
    pattern: {
      value: /^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/,
      message:
        "First Name cannot start or end with spaces and cannot contain only spaces, numbers, or symbols",
    },
  },
  middle_name: {
    required: "Middle Name is required",
    pattern: {
      value: /^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/,
      message:
        "Middle Name cannot start or end with spaces and cannot contain only spaces, numbers, or symbols",
    },
  },
  last_name: {
    required: "Last Name is required",
    pattern: {
      value: /^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/,
      message:
        "Last Name cannot start or end with spaces and cannot contain only spaces, numbers, or symbols",
    },
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

  phone: {
    required: "Phone Number is required",
    pattern: {
      value: /^\+?[1-9]\d{7,14}$/,
      message:
        "Phone number must be a valid Phone Number with a minimum of 8 digits",
    },
  },
  intake: {
    required: "Intake is Required",
  },

  subject: {
    required: "Subject is required",
  },

  name: {
    required: "Name is required",
    pattern: {
      value: /^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/,
      message:
        "Name cannot start or end with spaces and cannot contain only spaces, numbers, or symbols",
    },
  },

  message: {
    required: "Message is required",
    maxLength: {
      value: 500,
      message: "Message must not exceed 500 characters",
    },
  },
  passport_number: {
    required: "Passport Number is required",
  },
  country_id: {
    required: "Country is required",
  },
  state_id: {
    required: "State is required",
  },
  city_id: {
    required: "City is required",
  },
};

export default validationSchema;

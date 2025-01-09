export const loginOptions = {
    user: {
      required: "Username is required",
      minLength: {
        value: 8,
        message: "Username must have at least 8 characters",
      },
    },
    password: {
      required: "Pass is required",
      minLength: {
        value: 8,
        message: "Pass must have at least 8 characters",
      },
      pattern: {
        value: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
        message: "Password must contain at least one special character",
      },
    },
  };
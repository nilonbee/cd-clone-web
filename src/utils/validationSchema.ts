const validationSchema = {
    first_name: {
        required: 'First Name is required',
    },
    email: {
        required: 'Email is required',
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
        },
    },
    password: {
        required: 'Password is required',
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{10,}$/,
            message: 'Password must include at least one uppercase letter, one lowercase letter, one number, one symbol (@#$%^&*), and be at least 10 characters long',
        },
    },
    phone: {
        required: 'Phone Number is required',
        pattern: {
            value: /^\+?[0-9]{8,13}$/,
            message: 'Invalid phone number.',
        },
    },
};

export default validationSchema;
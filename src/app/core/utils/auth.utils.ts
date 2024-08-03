export const loginFormFields = [
  { name: 'email', type: 'email', placeholder: 'E-mail' },
  { name: 'password', type: 'password', placeholder: 'Password' },
];

export const loginButtons = [
  {
    text: 'Sign in',
    type: 'submit',
    cssClass: 'btn btn-primary',
    submit: true,
  },
  {
    text: 'Sign in with Google',
    type: 'button',
    cssClass: 'btn btn-google',
    imgSrc: '/images/google.png',
    submit: false,
  },
];

export const registerFormFiels = [
  { name: 'name', type: 'text', placeholder: 'Your Name' },
  { name: 'email', type: 'email', placeholder: 'E-mail' },
  { name: 'password', type: 'password', placeholder: 'Password' },
  {
    name: 'confirmPassword',
    type: 'password',
    placeholder: 'Repeat your password',
  },
];
export const registerButtons = [
  {
    text: 'Sign up',
    type: 'submit',
    cssClass: 'btn btn-primary',
    submit: true,
  },
];

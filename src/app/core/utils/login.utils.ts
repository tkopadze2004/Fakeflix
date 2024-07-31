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
  {
    text: 'Sign in anonymously',
    type: 'button',
    cssClass: 'btn btn-anonymous',
    submit: false,
  },
];

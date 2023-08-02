import { object, string } from 'yup'

export const loginValidation = object({
  email: string()
    .email('Invalid login credentials')
    .required('You are trying to enter an empty email'),
  password: string()
    .min(8, 'Password requires a minimum of 8 characters')
    .required('You are trying to enter an empty password')
})

export const singupValidation = loginValidation.shape({
  nick: string()

    .min(5, 'User name requires a minimum of 8 characters')
    .required('You are trying to enter an empty nick')
})

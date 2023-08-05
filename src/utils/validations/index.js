import { isInteger } from 'formik'
import { number, object, string } from 'yup'

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

export const customerRValidation = object({
  id: number()

    .min(99999, 'Minimo de 6 digitos')
    .required('Campo requerido (id)'),

  fname: string()

    .required('Campo requerido'),

  lname: string()

    .required('Campo requerido'),

  email: string()

    .min(5, 'Minimo de 5 letras')
    .required('Campo requerido '),

  sex: string()

    .min(3, 'Minimo de 5 letras')
    .required('Campo requerido '),

  phone: number()

    .min(99999, 'minimo de numeros 6')
    .max(99999999999999, 'Numero demasiado largo'),

  direcction: string()

})

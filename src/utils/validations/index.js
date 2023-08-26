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

export const customerSearch = object({

  ids: number()
    .min(9999,'minimo 5 caracteres')
    .required('Campo requerido'),

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

  phone: number()

    .min(99999, 'minimo de numeros 6')
    .max(99999999999999, 'Numero demasiado largo'),

  direcction: string()

})


export const userCreateValidation = object({

  userName: string()
    .required('Este campo es requerido'),
  password: string()
    .min(8, 'Minimo de 8 characteres')
    .required('Este campo es requerido')

})

export const locationCreateValidation = object({
  name: string()
    .required('Campo requerido'),

  address: string()
    .required('Campo requerido'),
  
  rif: string()
    .required('Campo requerido'),

})

export const locationSearchValidation = object({

  nombre: string()
    .min(5,'minimo 5 caracteres')

})

export const userSearchValidation = object({

  nombre: string()
    .min(5,'minimo 5 caracteres')

})



export const supplierRegisterValidation = object({


  name: string()

    .required('Campo requerido'),

  email: string()

    .min(5, 'Minimo de 5 letras')
    .required('Campo requerido '),

  phone: number()

    .min(99999, 'minimo de numeros 6')
    .max(99999999999999, 'Numero demasiado largo'),

  address: string()
    
    .min(5, 'Minimo de 5 letras')
    .required('Campo requerido'),

})


export const supplierSearchValidation = object({

  name: string()
    .min(1,'minimo 1 caracteres')
    .required('Campo requerido'),

})


export const categoryCreateValidation = object({

  name: string()
    .required('Este campo es requerido'),
  description: string()
    .min(8, 'Minimo de 8 characteres')
    .required('Este campo es requerido')

})

export const categorySearchValidation = object({

  name: string()
    .min(1,'minimo 1 caracteres')
    .required('Campo requerido'),

})

export const brandCreateValidation = object({

  name: string()
    .required('Este campo es requerido'),


})

export const brandSearchValidation = object({

  name: string()
    .min(1,'minimo 1 caracteres')
    .required('Campo requerido'),

})


export const productRegisterValidation = object({

  
  name: string()
    
    .required('Campo requerido'),

  description: string()

    .required('Campo requerido '),

})

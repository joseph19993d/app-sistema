'use client'

import { useCallback } from 'react'
import InputText from '@/components/inputText/customer'
import { useFormik } from 'formik'
import { locationCreateValidation } from '@/utils/validations'
import { useState } from 'react'

const initialValues = {
  name: '',
  address: '',
  rif: ''
}

export default function Create () {

  const onSubmit = useCallback((value, actions) => {
      console.log('value', value, formik)
      setTimeout(() => {
      actions.setSubmitting(false)
      }, 3000)
  }, [])

  const formik = useFormik({
      initialValues,
      validationSchema: locationCreateValidation,
      onSubmit
  })

  const backgroundStyles = {
  
    backgroundImage: "url('/fondo.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: 0,
    marginding: 0,
    
  };

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [location, setLocation] = useState([
      { id: 1, name: 'local 3', address:'t2 m81 l233', rif: 'rojo, rejas blancas, ',contactNumber: '38745126', email:'local3@mylocal.com' },
  ])

  let newName='';
  const [alerta,setAlerta]=useState('');
  const [finded, setFinded] = useState(false);

  
  const eliminar = (id) => {

    console.log(location[0].id)

    if(id === location[0].id){
      setFinded(false);
      console.log('encontrado');
      location[0]={};
      limpiaraddressrif();
    }else{
      setFinded(true)
      console.log('no encontrado')
    }
  }

  
  const registrar = (values) => {
    
    console.log(values.id)
    console.log(location[0].id)

    if(values.id){
      setFinded(false)
      console.log('Registrado')
      location[0].name = formik.values.name;
      location[0].address = formik.values.address;
      location[0].rif = formik.values.rif;
      location[0].contactNumber = formik.values.contactNumber
      location[0].email = formik.values.email;

      
    }else{
      console.log('id registrado ateriormente')

    }
  }

  const Modificar = (id) => {
    
    console.log(id)
    console.log(location[0].id)

    if(id === location[0].id){
      setFinded(false)
      console.log('Modificando')
      location[0].name = formik.values.name;
      location[0].address = formik.values.address;
      location[0].rif = formik.values.rif;
      location[0].contactNumber = formik.values.contactNumber
      location[0].email = formik.values.email;

      console.log(location)
      
    }else{
      setFinded(true)
      formik.values={}
      console.log('no encontrado')
      limpiaraddressrif()
    }
  }

  const search = () => {
    
      console.log(newName)
      console.log(location[0].name)

      if(newName === location[0].name){
        setFinded(false)
        console.log('encontrado')
        inputsChanges(location[0])
      }else{
        setFinded(true)
        formik.values={}
        console.log('no encontrado')
        limpiaraddressDescription()
      }
  }
  console.log('finded:'+ finded)
  console.log('Mensajes de error = ', formik.errors)
  console.log('Esta sucio =', formik.dirty)
  console.log('Es valido =', formik.isValid)

  const isDisable =  finded && formik.isValid || formik.isSubmitting && formik.dirty 

  const inputsChanges =(location)=>{
    formik.values.id    = location.id
    formik.values.address = location.address
    formik.values.rif = location.rif
    formik.values.contactNumber = location.rif
    formik.values.email = location.email

  }

  
  const limpiaraddressDescription=()=>{
    formik.setFieldValue('address', '')  
    formik.setFieldValue('description', '')
  }
  
  const limpiar =()=>{
    formik.resetForm()
  }



  return (
    
    <main className=' flex md:justify-center
    justify-center
    '
    style={backgroundStyles}
    >
      <div className=''>

        <div className=''>

          <div className=' 
            bg-white bg-opacity-[0.25]
            justify-center
            rounded-[40px]
            md:mt-[1vh] mt-[2vh]
            md:my-[2vh] my-[2vh]
            md:mr-[3vw] 
            md:px-[4vw] px-10
            md:py-[6vh] py-1
            flex flex-1 flex-col 
            '>

            <form className='flex flex-1 flex-col ' onSubmit={formik.handleSubmit}>

              <div>
                <p className='text text-4xl font-bold  text-white text-center'>
                  {/* Administracion Usuario  */}
                  Local
                </p>
              </div>

              <div className='
                flex flex-col 
                mt-6  
                '>
                <span 
                  className='text-1xl font-bold' 
                  title='local'
                  >

                  Buscar local

                </span>

                  <InputText
                    name='name'
                    type='text'
                    placeholder='Nombre '
                    value={newName=formik.values.name}
                    onKeyDown={(e) => {
                        formik.handleChange(e);
                    }}
                    onKeyUp={(e) => {
                        formik.handleChange(e);
                        search();
                    }}
                    onChange={
                        (e) => {
                            formik.handleChange(e);
                        }
                    }
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : null}
                  />

                <div className='box-border border-cyan-30 borner-none p-1 bg-black bg-opacity-20 rounded-lg pt-2'>

                    <lavel className="text-1xl font-bold"> Datos de local </lavel>

                    <InputText
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.name && formik.errors.name ? formik.errors.name : null}
                    />

                    <InputText
                    name='rif'
                    type='text'
                    placeholder='Rif'
                    value={formik.values.rif}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.rif && formik.errors.rif ? formik.errors.rif : null}
                    />

                    <InputText
                    name='address'
                    type='text'
                    placeholder='Direccion'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.address && formik.errors.address ? formik.errors.address : null}
                    />

                    
                    <InputText
                    name='contactNumber'
                    type='text'
                    placeholder='numero de contacto'
                    value={formik.values.contactNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.contactNumber && formik.errors.contactNumber ? formik.errors.contactNumber : null}
                    />

                    
                    
                  <InputText
                    name='email'
                    type='text'
                    placeholder='Correo '
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                    />

                  <h3 className='text-1l font-bold'> Subir Logo </h3>
                  <input
                      className='mb-3 bg-black bg-opacity-30'
                      type="file"
                    
                  />

                  
         
                </div>
              </div>

              <div className='m-0 flex fle-row'>
                
                <input className='text-center
                    btn 
                    border-blue-900 border-1
                    bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                    mt-3
                    ml-0
                    mr-2
                    max-w-[60%] '
                    onClick={() => {
                      registrar(
                        formik.values
                      )
                    }}
                    value='Registrar' 
                    type='submit'  
                    disabled={!isDisable} 
                />
                <button className='text-center
                    btn 
                    border-blue-900 border-1
                    bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                    mt-3
                    ml-0
                    max-w-[60%] '
                    type="button"
                    value='Limpiar'
                    style={{ userSelect: 'none' }}
                    onClick={(e)=>{
                      Modificar( formik.values.id)
                    }}
                >
                  Modificar
                </button>
                <button className='text-center
                    btn 
                    border-blue-900 border-1
                    bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                    mt-3
                    ml-0
                    max-w-[60%] '
                    type="button"
                    value='eliminar'
                    style={{ userSelect: 'none' }}
                    onClick={(e)=>{
                      eliminar(formik.values.id)
                    }}
                >
                  Eliminar
                </button>
                <button className='text-center
                    btn 
                    border-blue-900 border-1
                    bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                    mt-3
                    ml-0
                    max-w-[60%] '
                    type="button"
                    value='Limpiar'
                    style={{ userSelect: 'none' }}
                    onClick={(e)=>{
                      limpiar()
                    }}
                >
                  Limpiar
                </button>
                
              </div>

            </form>
          </div>
        </div>

      </div>
    </main>
  )
} 

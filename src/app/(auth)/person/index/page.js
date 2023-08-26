'use client'

/* 
id(dni)	string
firstName	string
lastName	string
email	string
phone	string
sexo	string
address	string 
*/

import { useCallback } from 'react'
import InputText from '@/components/inputText/customer'
import { useFormik } from 'formik'
import { userCreateValidation } from '@/utils/validations'
import { useState } from 'react'
import Selection from '@/components/select/page'
import User from '@/app/(auth)/user/index/page'
import Link from 'next/link';

const initialValues = {
  id: '',
  fName: '',
  lName: '',
  email: '',
  phone: '',
  sex: '',
  direcction: ''
}

export default function Person ({ data={} }) {

    const onSubmit = useCallback((value, actions) => {
        console.log('value', value, formik)
        setTimeout(() => {
        actions.setSubmitting(false)
        }, 3000)
    }, [])

    const formik = useFormik({
        initialValues,
        validationSchema: userCreateValidation,
        onSubmit
    })

    let newId=0;
    const [alerta,setAlerta]=useState('');
    const [UserView, setUserView] = useState(false);

    const [persona, setPersona] = useState(
        { id: '1234', firstName: 'Andres', lastName: 'Rodrigo', email:'asasa@gmail.com', phone:'34843231', sex:'M', direcction: 'torres la venezuela'  }
    )

    const [finded, setFinded] = useState(false);

    const search = () => {
        if(newId === persona.id){
        setFinded(false)
        }else{
        setFinded(true)
        formik.values={}
      }
    }

    const guardar=(persona)=>{
        setPersona({});
        setPersona(persona);
        setFinded(false);
        Limpiar();
    }

    const changes =(id)=>{
      setFinded(true)
      if (getPersona(id)){
        const lastPerson=getPersona(id)
        formik.values.id=lastPerson.id
        formik.values.fName = lastPerson.firstName
        formik.values.lName = lastPerson.lastName
        formik.values.email = lastPerson.email
        formik.values.phone = lastPerson.phone
        formik.values.sex   = lastPerson.sex
        formik.values.direcction = lastPerson.direcction
        
      }
      console.log( formik.values)
    }

    const Actualizar=(persona)=>{
      setPersona(persona);
      setFinded(false);
    }

    const Limpiar=()=>{
      formik.resetForm()
    }

    const Eliminar=(newId)=>{
      if(persona.id === newId){
        Limpiar()
        setPersona({ id: '', firstName: '', lastName: '', email:'', phone:'', sex:'', direcction: ''  });
        search()
        setAlerta('Usuario:( '+ newId +' )Eliminado')
      }
    }

    const getPersona = (id) => {
      if(persona.id === id){
        return persona
      }
      else{
        return {}
      }
    }
    

    const isDisable = formik.isValid || formik.isSubmitting && formik.dirty

  //   console.log('Mensajes de error = ', formik.errors)
  //   console.log('Esta sucio =', formik.dirty)
  //   console.log('Es valido =', formik.isValid)

    const backgroundStyles = {
      backgroundImage: "url('/fondo.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      margin: 0,
      marginding: 0,
    };
  
    const inputs=()=>(
      <div>
        {console.log(formik.values) }
        <InputText
            name='fName'
            type='text'
            placeholder='Nombre'
            value={formik.values.fName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.fName && formik.errors.fName ? formik.errors.fName : null}
            />

        <InputText
            name='lName'
            type='text'
            placeholder='Apellido'
            value={formik.values.lName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.lName && formik.errors.lName ? formik.errors.lName : null}
            />

        
        <InputText
            name='email'
            type='email'
            placeholder='Correo'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            />



        <InputText
            name='phone'
            type='number'
            placeholder='phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
            />

        <InputText
            name='sex'
            type='string'
            placeholder='Sexo /M/F'
            value={formik.values.sex}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.sex && formik.errors.sex ? formik.errors.sex : null}
            />
        
        <InputText
            name='direcction'
            type='string'
            placeholder='Direccion'
            value={formik.values.direcction}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMessage={formik.touched.direcction && formik.errors.direcction ? formik.errors.direcction : null}
        />
      </div>
    )
    

  return (
    
    <main className=' flex md:justify-end 
    justify-center
    '
    style={backgroundStyles}
    >
      <div className=''>

        <div className='flex flex-col'>
            {UserView?(
            <User dataPerson={persona} />
            ):<></>
            }
          <span className='flex justify-center text-center text-red-200 mr-[20px]'>
            
            {alerta}
            
          </span>
          
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
                  Persona
                </p>
              </div>

              <div className='
                flex flex-col 
                mt-6  
                '>
                  <span 
                    className='text-1xl font-bold' 
                    title='la persona c'
                    >

                    IDENTIFICACION DE PERSONA

                  </span>

                  <InputText
                    name='id'
                    type='text'
                    placeholder='DNI / C.I / RIF'
                    value={newId=formik.values.id}
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
                    errorMessage={formik.touched.id && formik.errors.id ? formik.errors.id : null}
                  />
                {finded&& !formik.values.id.length<1?(
              
                <div className='box-border border-cyan-30 borner-none p-1 bg-black bg-opacity-20 rounded-lg pt-2'>
                    
                    <label className="text-1xl font-bold"> Datos segundarios </label>
                     
                     {inputs()}

                      <div className=' flex flex-row m-0'>
                        <button className='text-center
                            btn 
                            border-blue-900 border-1
                            bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                            mt-3
                            ml-0
                            max-w-[60%] '
                            type="button"
                            value='Registrar Persona'
                            style={{ userSelect: 'none' }}
                            onClick={(e)=>{
                              formik.handleSubmit(e);
                              guardar({
                                  id: formik.values.id,
                                  firstName: formik.values.fName, 
                                  lastName: formik.values.lName,  
                                  email: formik.values.email,
                                  phone: formik.values.phone,
                                  sex: formik.values.sex,
                                  direcction: formik.values.direcction
                              });
                            }}

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
                        >
                          Guardar
                        </button>
                        

                        <button className='text-center
                            btn 
                            border-blue-900 border-1
                            bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                            mt-3
                            ml-0
                            max-w-[60%] '
                            type="button"
                            value='Registrar Persona'
                            style={{ userSelect: 'none' }}
                            onClick={(e)=>{
                            
                              Eliminar(newId);
                            }}
                        >
                          Eliminar 
                        </button>
                      </div>
           
                </div>
                ):
                <div>
                    {formik.values.id.length<1?(
                       <p>Esperando IDENTIFICACION {console.log(formik.values.id)}</p> 
                    ):
                    <div>
                        <p className='red'> Usuario : </p>
                        <label> id: {persona.id}</label>
                        <br></br>
                        <label> nombre: {persona.firstName +' '+persona.lastName }</label>
                        <br></br>
                        <label> email: {persona.email}</label>
                        <br></br>
                        <label> phone: {persona.phone}</label>
                        <br></br>
                        <label> sex: {persona.sex}</label>
                        <br></br>
                        <label> direccion: {persona.direcction}</label>
                        {/* id: '1234', firstName: 'Andres', lastName: 'Rodrigo', email:'asasa@gmail.com', phone:'34843231', sex:'M', direcction: 'torres la venezuela'  */}
                        <br></br>
                        <div className='flex flex-row'>
                            <button className='text-center
                                btn 
                                border-blue-900 border-1
                                bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                                mt-3
                                ml-0
                                mr-2
                                max-w-[60%] '
                                type="button"
                                value='Registrar Persona'
                                style={{ userSelect: 'none' }}
                                onClick={(e)=>{
                                  formik.handleSubmit(e);
                                  setUserView( !UserView)
                                }}

                               
                              >
                                {UserView? 'CULTAR' : 'SIGUIENTE'}
                              
                            </button>

                          <button className='text-center
                              btn 
                              border-blue-900 border-1
                              bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                              mt-3
                              ml-0
                              max-w-[60%] '
                              type="button"
                              value='Registrar Persona'
                              style={{ userSelect: 'none' }}
                            
                              onClick={(e) => {
                                 
                                  changes(newId)

                              }}
                              
                          >
                            Hacer cambios 
                          </button>
                        </div>
                    </div>
                    }
                </div>
                }
                
              </div>

            </form>
          </div>
        </div>

      </div>
      
    </main>
  )
}

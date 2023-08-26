import react from "react"
import colors from "tailwindcss/colors";
import { useState } from "react";

export default function Selection ({label='Insertar "label" ', name='x', type='select', opcion="nombre", opcionName="id", datos={}}) {
    
    if (!datos || datos.length === 0) {
            return <div>No hay datos disponibles.</div>;
    }
    const claves = Object.keys(datos[0]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    };

    return(

        <div>
                <div className='inputs !pr-[30px] bg-black bg-opacity-20 text-neutral-600 text-1xl mb-3 rounded-lg min-h-[60px]  '>

                    <label className='text-1xl text-blue-500'> {label} </label>

                    <select
                        className='rounded-lg  bg-purple-500 bg-opacity-20 text-white'
                        name={name}
                        type={type}
                        value={selectedOption}
                        onChange={handleSelectChange }
                    >
                        {datos.map((dato) => (
                        
                        <option key={dato[opcion]} value={dato[opcion]} className=' className="bg-gray-100 text-red-700"' >

                                {dato[opcion]}

                        </option>
                        
                    ))}

                    </select>

                </div>

        </div>
    )
}

export function SelectionAdd ({label='Insertar "label" ', name='x', type='select', opcion="nombre", opcionName="id", datos}) {
    
    if (!datos || datos.length === 0) {
            return <div>No hay datos disponibles.</div>;
    }
    const claves = Object.keys(datos[0]);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selectedOption, setSelectedOption] = useState('');
    
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
    
    return(
    
    <div>
            <div className='inputs !pr-[50px] bg-black bg-opacity-20 text-neutral-600 text-1xl mb-3 rounded-lg  min-h-[80px]  '>   
                <select
                    className='rounded-lg '
                    name={name}
                    type={type}
                    value={selectedOption}
                    onChange={handleSelectChange }
                >
                    {datos.map((dato) => (
                       
                       <option key={dato[opcionName]} value={dato[opcionName]}>
    
                            {dato[opcion]}
    
                        </option>
                       
                   ))}
    
                </select>
                
                <div>
                    <input className='text-center
                        
                        btn
                        mt-2
                        ml-3
                        border-blue-900 border-1
                        bg-gradient-to-r from-blue-500 to-blue-900 hover:from-pink-500 hover:to-yellow-500
                        right-3
                        top-2
                        max-w-[80px] ' 
                        value='Agregar' 
                        type='submit'  
                    />
                   
                    <label> Cantidad: </label>
                    <input className='text-center
                        mt-2
                        border-blue-900 border-1
                        right-3
                        top-2
                        max-w-[70px] '  
                        placeholder="1"
                        type='number'  
                    />
                    
                </div>
    
            </div>
    
    </div>
    )
    }
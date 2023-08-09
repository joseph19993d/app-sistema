import react from "react"
import colors from "tailwindcss/colors";
import { useState } from "react";

export default function Selection ({label='Insertar "label" ', name='x', type='select', opcion="nombre", opcionName="id", datos}) {
    
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
        <div className='inputs !pr-[30px] bg-white text-neutral-600 text-1xl mb-3 rounded-lg min-h-[60px]  '>

            <label className='text-1xl '> {label} </label>

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

        </div>

</div>
)
}
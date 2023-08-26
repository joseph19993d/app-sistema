import react from "react"
import './styles.css'
import colors from "tailwindcss/colors";
import Link from "next/link";

export default function table3 ({datos={}, buttonDelete= true, buttonUpdate= true, block= 'id',  idOf=true}) {
    
if (!datos || datos.length === 0) {
        return <div>No hay datos disponibles.</div>;
}
const claves = Object.keys(datos[0]);
let table3Body = 0;
let table3Head= 0;
let id = 0;
return(

<div>
    <div className="overflow-x-auto inset-0 ">
        <table className="min-w-full divide-y divide-gray-200  " key={'tabla39876534'}>
            <thead className="bg-gray-50 bg-opacity-20  ">
              
                <tr id="head" >
                    {claves.map((clave) => (
                        
                        
                        idOf&&clave === block ?(
                            <></>
                        ): <th key={table3Head+=1} className="px-6 py-3 text-left text-xs font-medium text-gray-100 rounded-lg uppercase tracking-wider">
                            {clave}
                            </th>
                        
                        
                    ))}
                    {
                        

                        buttonDelete||buttonUpdate ?
                        (
                            
                            <th colSpan={2} className="px-6 py-3 text-left text-xs font-medium text-gray-100 rounded uppercase tracking-wider"> 
                               <span> 
                                 Opciones
                               </span>
                            </th>

                        ):<div></div>
                        
                        
                    }
                </tr>
                
            </thead>
            <tbody className="bg-white bg-opacity-20  divide-y divide-gray-200 divide-solid w-full">
               
                {
                //fila raw
                datos.map((dato) => (
                            //columna col data
                            <tr key={table3Body+=1}>
                                {
                                claves.map((clave) => (
                                    // <p key={clave}>  {clave}: {dato[clave]}</p>
                                    idOf&&clave === block ?(
                                        <></>
                                    ):
                                        <td key={dato[clave]} className="text-sm text-gray-100" data-title={clave}>
                                        {dato[clave]}
                                        {}
                                        </td>

                                ))
                                }
                                <td data-title={'Opciones'}  className="text-sm  text-end text-gray-900 ">
                                        
                                            <Link href={'#'} className=" 
                                                btn
                                                text-center 
                                                border-blue-900 border-1
                                                bg-gradient-to-r from-purple-500 from-10% via-purple-800 via-50% to-purple-500 to-90% 
                                                hover:from-pink-500 hover:to-yellow-500
                                                bg-opacity-10
                                                mr-2
                                            " >
                                                Editar 
                                            </Link>

                                            
                                             <Link href={'#'} className="
                                                btn
                                                text-center
                                                border-blue-900 border-1
                                                bg-gradient-to-r from-purple-500 from-10% via-purple-800 via-50% to-purple-500 to-90% 
                                                hover:from-pink-500 hover:to-yellow-500
                                             " >
                                                Eliminar
                                             </Link>
                                        
                                </td>
                            </tr>
                        )
                    )
                }
               
            </tbody>
        </table>
    </div>
</div>
)
}
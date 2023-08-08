import react from "react"
import './styles.css'
import colors from "tailwindcss/colors";

export default function table3 ({datos}) {
    
if (!datos || datos.length === 0) {
        return <div>No hay datos disponibles.</div>;
}
const claves = Object.keys(datos[0]);
let table3Body = 0;

return(
<div>
    <div className="overflow-x-auto inset-0 ">
        <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50 ">
              
                <tr id="head" >
                    {claves.map((clave) => (
                        <th key={clave} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {clave}
                        </th>
                    ))}
                </tr>
                
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 divide-solid w-full">
                {datos.map((dato) => (
                   
                    <tr key={table3Body+=1}>
                        {
                        claves.map((clave) => (
                            // <p key={clave}>  {clave}: {dato[clave]}</p>
                            <td key={dato[clave]} className="text-sm text-gray-900" data-title={clave}>
                                {dato[clave]}
                            </td>
                        ))
                        }
                    </tr>
                    
                ))}
            </tbody>
        </table>
    </div>
</div>
)
}
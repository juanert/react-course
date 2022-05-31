//Importar los hooks que necesitamos
import { useState, useEffect } from "react";
//Componentes de hook
function Hooks() {
    //Color es una variable, setColor es una función para
    //cambiar el valor de la variable
    const [color, setColor] = useState("Rojo");
    //Timer es una constante que funciona como un componente
    const Timer = () => {
        //Tenemos la variable count y su metodo de cambio
        //el valor por defecto es 0
        const [count, setCount] = useState(0);
        //Utilizamos el useEffect
        useEffect(() => {
            //setTimeout ejecuta codigo cada cierto tiempo (1 segundo en este caso)
            setTimeout(() => {
                //cambiamos el valor de contador
                setCount((count) => count + 1);
            }, 1000);
        });
        return <h1>Me he renderizado {count} veces!</h1>;
    }
    //lo que retorna el componente Hooks
    return (
        <>
            <h1>{color}</h1>
            <button onClick={() => { setColor("Verde") }}>Cambiar color</button>
            {Timer()}
        </>
    )
}
//Permitimos la exportación del componente
export default Hooks;
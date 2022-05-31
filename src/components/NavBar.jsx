function NavBar({ title, color, link }) {
    const evento = (mensaje) => {
        console.log(mensaje);
    }
    const content = () => {
        return (
            <div className={'bg-' + color + '-600 w-full'}>
                <h1>Esto es el NavBar</h1>
                <button onClick={() => { evento('Hola mundo') }}>{title}</button>
                <p>{color}</p>
            </div>
        )
    }
    return content(); 
}
// Operador ternario: (Condición) ? (if true) : (if false)
export default NavBar;
// El color se pasa como un objeto por eso la doble llave
const Mensaje = (params) => {
    return(
        <p style={{color:params.color, fontSize: params.fontSize}} >{params.message}</p>
    );
}
export default Mensaje
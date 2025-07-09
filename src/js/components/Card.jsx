import { Digitos } from "./Digitos"


export const Card = ({counter})=>{
    let unidades = counter % 10
    let decenas = Math.floor((counter / 10) % 10)
    let centenas = Math.floor((counter / 100) % 10)
    let miles = Math.floor((counter / 1000) % 10)
     
    return (
        <div className="card">
            <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
            <Digitos valor={unidades}></Digitos>
            <Digitos valor={decenas}></Digitos>
            <Digitos valor={centenas}></Digitos>
            <Digitos valor={miles}></Digitos>
        </div>
    );
}

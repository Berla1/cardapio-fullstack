import { IoIosCloseCircle } from "react-icons/io";
interface CardProps {
    price: number;
    tittle: string;
    image: string;   
    onDelete(): void
}


const Card = ({ price, tittle, image, onDelete }: CardProps) => {
    return(

        <div className="flex flex-col  items-center justify-center rounded-lg shadow-2xl w-1/4 gap-2 p-5 transition-transform delay-0 relative hover:scale-105">
            <button onClick={onDelete}><IoIosCloseCircle color="red" size={30} className="absolute -top-1 -right-2"/></button>

            <img src={image} alt="Imagem do alimento" className="max-w-[300px] h-[250px] rounded-lg"/>
            <h2>{tittle}</h2>
            <p>Valor: <b>${price}</b></p>
        </div>
    )
}

export default Card
import "./modal.css";

import { useEffect, useState } from "react";
import Input from "../Input";
import useFoodDataMutate from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";
import { IoCloseOutline } from "react-icons/io5";

interface ModalProps{
    closeModal() : void 
}

const Modal = ({ closeModal }: ModalProps) => {
  const [tittle, setTittle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess } = useFoodDataMutate();


  useEffect(() => {
    if (!isSuccess) return 
    closeModal
        
  }, [isSuccess, closeModal])

  const handleSubmit = () => {
    const foodData: FoodData = {
        tittle,
        price,
        image,
        title: ""
    };
    mutate(foodData);
  };

  return (
    <div className="modal-overlay">
      <div className="flex flex-col items-center justify-center bg-white absolute p-3 rounded-lg w-1/3 h-1/2">
        <button><IoCloseOutline onClick={closeModal} className='absolute top-3 right-3' size={35}/></button>

        <h2 className="text-2xl mb-5">Cadastre um novo item no cardápio!</h2>
        <form className="flex flex-col gap-2 mb-4">
          <Input label="Titulo" value={tittle} updateValue={setTittle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="Imagem (URL)" value={image} updateValue={setImage} />
        </form>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white p-2 rounded-lg"
        >
          Postar
        </button>
      </div>
    </div>
  );
};

export default Modal;

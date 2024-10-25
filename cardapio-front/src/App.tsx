import { useState, useEffect } from "react";
import Card from "./components/Card";
import Modal from "./components/Modal";
import useFoodData from "./hooks/useFoodData";
import useFoodDataDelete from "./hooks/useFoodDataDelete";

function App() {
  const { data } = useFoodData();
  const [foods, setFoods] = useState(data || []); 
  const [modalOpen, setModalOpen] = useState(false);

  
  useEffect(() => {
    if (data) {
      setFoods(data);
    }
  }, [data]);

  const handleOpenModal = () => {
    setModalOpen((prev) => !prev);
  };

  const { mutate: deleteFood } = useFoodDataDelete();

  const handleDelete = (id: number) => {
    deleteFood(id, {
      onSuccess: () => {
        setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
      },
    });
  };

  return (
    <>
      <main className="flex flex-col py-8 w-full">
        <div className="flex justify-center">
          <h1 className="text-4xl mb-10">Cardápio</h1>
          <button
            className="absolute right-10 bg-blue-700 text-white rounded-lg p-2"
            onClick={handleOpenModal}
          >
            Postar
          </button>
        </div>

        <div className="flex justify-center items-center gap-5 flex-wrap">
          {foods?.map((food) => (
            <Card
              key={food.id} 
              onDelete={() => handleDelete(food.id)} 
              image={food.image}
              tittle={food.title}
              price={food.price}
            />
          ))}
          {modalOpen ? <Modal closeModal={handleOpenModal} /> : null}
        </div>
      </main>
    </>
  );
}

export default App;

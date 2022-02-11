import "./App.css";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";
import { useState } from "react";

function App() {
    const API = [
        {
            id: 1,
            title: "Pasear al perro",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati itaque porro officiis. Iusto pariatur provident possimus, hic numquam laudantium quae!",
        },
        {
            id: 2,
            title: "Lavar baño",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati itaque porro officiis. Iusto pariatur provident possimus, hic numquam laudantium quae!",
        },
        {
            id: 3,
            title: "Alimentar gato",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati itaque porro officiis. Iusto pariatur provident possimus, hic numquam laudantium quae!",
        },
    ];

    const [modalIsActive, setModalIsActive] = useState(false);

    const [counter, setCounter] = useState(0);

    function suma() {
        setCounter(counter + 1);
    }

    function resta() {
        setCounter(counter - 1);
    }

    function openModal() {
        setModalIsActive(true);
    }
    function closeModal() {
        setModalIsActive(false);
    }

    return (
        <div className="App">
            <Cards api={API} onOpen={openModal} />
            {modalIsActive && <Modal onClose={closeModal} />}
            {modalIsActive && <Backdrop onClose={closeModal} />}
            <span>{counter}</span>
            <button key={1} onClick={suma}>
                Suma
            </button>
            <button key={2} onClick={resta}>
                Resta
            </button>
        </div>
    );
}

export default App;

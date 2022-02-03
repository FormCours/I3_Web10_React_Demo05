import { useState } from 'react';
import { nanoid } from 'nanoid';

const ManipulationTableau = () => {
    
    const [elements, setElements] = useState([
        {id: nanoid(), msg: 'Demo', time: new Date()}
    ]);

    const handleAddElement = () => {
        const newElement =  {id: nanoid(), msg: 'Add', time: new Date()};

        setElements(elems => elems.concat(newElement));
        // setElements(elems => [...elems, newElement]);
    }

    const elementsJSX = elements.map(
        elem => <li key={elem.id}>
            {elem.msg} {elem.time.toLocaleTimeString('fr-BE')}
        </li>
    );

    console.log(elements);
    return (<>
        <button onClick={handleAddElement}>Ajouter un élément</button>
        <ul>
            {elementsJSX}
        </ul>
    </>);
};

export default ManipulationTableau;
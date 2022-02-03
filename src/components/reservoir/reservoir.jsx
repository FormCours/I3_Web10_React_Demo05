import { useState } from 'react';

const Reservoir = (props) => {
    const { max } = props;                               // Props "data" ↓
    const { onReservoirPlein, onReservoirVide } = props; // Props "Event" ↑

    const [niveau, setNiveau] = useState(0);

    const handleUp = () => {
        if (niveau < max) {
            setNiveau(n => n + 1);
        }
        else {
            onReservoirPlein();
            console.log('Event Plein');
        }
    };

    const handleDown = () => {
        if (niveau > 0) {
            setNiveau(n => n - 1);
        }
        else {
            onReservoirVide();
            console.log('Event Vide');
        }
    };

    return (
        <div>
            <p>Le niveau du reservoir est de {niveau} sur {max} L</p>
            <button onClick={handleUp}>Ajouter 1L</button>
            <button onClick={handleDown}>Retirer 1L</button>
        </div>
    );
};

Reservoir.defaultProps = {
    max: 10,
    onReservoirPlein: () => { }, // NOOP
    onReservoirVide: () => { }   // -> Permet d'évité des erreurs quand l'event n'est pas utilisé
};

export default Reservoir;
import { useState } from 'react';

const Reservoir = (props) => {
    const {max} = props;

    const [niveau, setNiveau] = useState(0);

    const handleUp = () => {
        if(niveau < 10) {
            setNiveau(n => n + 1);
        }
    }

    const handleDown = () => {
        if(niveau > 0) {
            setNiveau(n => n - 1);
        }
    }

    return (
        <div>
            <p>Le niveau du reservoir est de {niveau} sur {max} L</p>
            <button onClick={handleUp}>Ajouter 1L</button>
            <button onClick={handleDown}>Retirer 1L</button>
        </div>
    )
}

Reservoir.defaultProps = {
    max: 10
}

export default Reservoir;
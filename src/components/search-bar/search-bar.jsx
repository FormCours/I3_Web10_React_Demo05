import { useState } from 'react';

const SearchBar = (props) => {
    const {hint, onSearch} = props;

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        // Déactivation du comportement par default du formulaire
        e.preventDefault();

        // On envoie l'event
        onSearch(query);

        // On reset le formulaire
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'
                placeholder={hint}
                onChange={(e) => setQuery(e.target.value)}
                value={query} />
            <input type='submit' value='Rechercher'
                disabled={query === ''} />
        </form>
    );
};

SearchBar.defaultProps = {
    hint : '',
    onSearch: () => {}
}

export default SearchBar;
import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favourite } from './components/favourite/favourite';
import { FavouriteContextProvider } from './context/FavouriteContext';
import { SearchContextProvider } from './context/SearchContext';

function App() {
    return (
        <div className={styles.App}>
            <SearchContextProvider>
                <Menu />
            </SearchContextProvider>
            <FavouriteContextProvider>
                <Container />
                <Favourite />
            </FavouriteContextProvider>
        </div>
    );
}

export default App;

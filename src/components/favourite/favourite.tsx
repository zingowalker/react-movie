import styles from './favourite.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavouriteContext } from '../../context/FavouriteContext';
import { FavouriteCard } from '../favourite-card/favourite-card';

export interface FavouriteProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favourites-and-templates
 */
export const Favourite = ({ className }: FavouriteProps) => {
    const { state } = useContext(FavouriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Favourites</h1>
            {state.favourites.length > 0 &&
                state.favourites.map((movie) => <FavouriteCard movie={movie} key={movie.id} />)}
        </div>
    );
};

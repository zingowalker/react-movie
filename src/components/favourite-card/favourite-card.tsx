import styles from './favourite-card.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { FavouriteContext } from '../../context/FavouriteContext';

export interface FavouriteCardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favourite-cards-and-templates
 */
export const FavouriteCard = ({ className, movie }: FavouriteCardProps) => {
    const { dispatch } = useContext(FavouriteContext);
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className={styles.favimg}
            />
            <div className={styles.detail}>
                <h1 className={styles.title}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div
                className={styles.delete}
                onClick={() => dispatch({ type: 'REMOVE_MOVIE', payload: movie })}
            >
                <img
                    src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                    className={styles.deleteImg}
                />
            </div>
        </div>
    );
};

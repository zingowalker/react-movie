import styles from './menu.module.scss';
import classNames from 'classnames';
import {useContext} from 'react';
import {SearchContext} from '../../context/SearchContext';


export interface MenuProps {
    className?: string;
}

const sortBy: {q: string, text: string}[] = [
    {q: 'popularity.desc', text: 'Popularity'},
    {q: 'vote_count.desc', text: 'Most Voted'},
    {q: 'release_date.desc', text: 'Release Date'},
];
const genres: {id: string, text: string}[] = [
    {id: '28', text: 'Action'},
    {id: '12', text: 'Adventure'},
    {id: '35', text: 'Comedy'},
    {id: '18', text: 'Drama'},
    {id: '27', text: 'Horror'},
    {id: '10749', text: 'Romance'},
    {id: '53', text: 'Thriller'},
    {id: '16', text: 'Animation'},
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {

    const {dispatch, state} = useContext(SearchContext);
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src="https://png.pngtree.com/png-vector/20190816/ourmid/pngtree-film-logo-design-template-vector-isolated-illustration-png-image_1693431.jpg"
                    className={styles.logoImg}
                ></img>
                <span className={styles.logoText}>TsetanMovie</span>
            </div>
            <span className={styles.title}>Sort by</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li className={styles.listItem} key={item.q} onClick={()=> dispatch({type: "SORT_BY", payload:item.q})}>
                        {item.text}
                    </li>
                ))}
                <span className={styles.title}></span>
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li className={styles.listItem} key={item.id} onClick={()=> dispatch({type: "ADD_GENRE", payload:item.id})}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

import classNames from 'classnames';
import styles from './navbar.module.scss';
import { Link } from 'react-router-dom';

export interface NavbarProps {
    className?: string;
}



export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className, styles.nav)}>
            <Link to={'/'}>
                <h1 className={styles.logo}>Hein Htet</h1>
            </Link>
            <ul className={styles.links}>
                <li>
                    <Link to={'/'}>Portfolio</Link>
                </li>
            </ul>
        </div>
    );
};
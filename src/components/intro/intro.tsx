import classNames from 'classnames';
import styles from './intro.module.scss';
import { Animation } from '../animation/animation';
import { Portfolio } from '../portfolio/portfolio';

export interface IntroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Intro = ({ className }: IntroProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <h2 className={styles.title}>Hein Htet Aung</h2>
                <h3 className={styles.subtitle}>Junior Web Developer</h3>
                <svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.line}
                >
                    <path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DC3284" />
                            <stop offset="1" stop-color="#DC3232" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <p className={styles.p}>
                Freelance providing services for programming and design content needs
            </p>
            <button>Let&apos;s collebrate 🍾</button>
            <Animation />
            <Portfolio />
        </div>
    );
};

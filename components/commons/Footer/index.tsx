import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Logo from 'components/commons/Logo';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';
import { SITEMAP } from 'constants/sitemap';
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Footer: React.FC<IProps> = ({ className, children, ...props }) => {
    return (
        <footer className={cn(styles.footer, className)}
                {...props}
        >
            <div className={styles.container}>
                <div className={styles.logoWrapper}>
                    <Logo size={'small'}
                          dark
                    />
                </div>

                <nav className={styles.nav}>
                    {SITEMAP.map(({ link, title }, index) => (
                        <Link href={link}
                              key={index}
                        >
                            {title}
                        </Link>
                    ))}
                </nav>

                <div className={styles.buttonContainer}>
                    <Link href={'/portfolio'}>
                        <Button as={'div'}
                                variant={'primary'}
                                iconName={IconName.Arrow}
                        >
                            See Our Portfolio
                        </Button>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

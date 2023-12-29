import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';
import { SITEMAP } from 'constants/sitemap';
import { Sitemap } from 'types/sitemap';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    items: Sitemap;
}

const Menu: React.FC<IProps> = ({ items, className, children, ...props }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuButtonClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={cn(styles.menu, {
            [styles.open]: isMenuOpen,
        }, className)}
             {...props}
        >
            <nav className={styles.nav}>
                {SITEMAP.map(({ title, link }, index) => (
                    <Link href={link}
                          key={index}
                    >
                        {title}
                    </Link>
                ))}
            </nav>
            <Button className={styles.menuButton}
                    variant={'icon'}
                    iconName={IconName.HAMBURGER}
                    aria-label={'Menu'}
                    onClick={handleMenuButtonClick}
            />
        </div>
    );
};

export default Menu;

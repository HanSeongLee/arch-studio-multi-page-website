import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Logo from 'components/commons/Logo';
import Menu from 'components/commons/Menu';
import { SITEMAP } from 'constants/sitemap';

interface IProps extends HTMLAttributes<HTMLHeadElement> {

}

const Header = ({ className, children, ...props }: IProps) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo />

                <Menu items={SITEMAP} />
            </Container>
        </header>
    );
};

export default Header;

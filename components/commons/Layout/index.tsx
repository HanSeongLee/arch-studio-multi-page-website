import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Footer from 'components/commons/Footer';
import Header from 'components/commons/Header';
import PageTitle from 'components/commons/PageTitle';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
}

const Layout: React.FC<IProps> = ({ title, className, children, ...props }) => {
    return (
        <div className={cn(styles.layout, className)}
             {...props}
        >
            <Header />
            <main className={styles.main}>
                {title && (
                    <PageTitle>
                        {title}
                    </PageTitle>
                )}
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

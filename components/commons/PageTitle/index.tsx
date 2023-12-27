import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLHeadingElement> {

}

const PageTitle: React.FC<IProps> = ({ className, children, ...props }) => {
    return (
        <h1 className={cn(styles.pageTitle, className)}
            {...props}
        >
            {children}
        </h1>
    );
};

export default PageTitle;

import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    disable?: {
        mobile?: boolean;
        tablet?: boolean;
        desktop?: boolean;
    };
}

const Container: React.FC<IProps> = ({ disable, className, children, ...props }) => {
    return (
        <div className={cn(styles.container, {
            [styles.disableMobile]: disable?.mobile,
            [styles.disableTablet]: disable?.tablet,
            [styles.disableDesktop]: disable?.desktop,
        }, className)}
             {...props}
        >
            {children}
        </div>
    );
};

export default Container;

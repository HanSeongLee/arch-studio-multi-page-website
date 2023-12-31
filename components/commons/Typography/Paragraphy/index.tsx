import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
    color?: string;
    opacity?: number;
}

const Paragraph: React.FC<IProps> = ({
                                         color, opacity, className, children,
                                         ...props
                                     }) => {
    return (
        <p className={cn(styles.paragraph, className)}
           style={{
               color,
               opacity,
           }}
           {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;

import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
    color?: string;
}

const Paragraph: React.FC<IProps> = ({ color, className, children, ...props }) => {
    return (
        <p className={cn(styles.paragraph, className)}
           style={{
               color,
           }}
           {...props}
        >
            {children}
        </p>
    );
};

export default Paragraph;

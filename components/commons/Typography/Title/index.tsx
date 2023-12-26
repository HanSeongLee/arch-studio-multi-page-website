import React, { createElement, HTMLAttributes } from 'react';
import styles from 'components/commons/Typography/Title/style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLHeadingElement> {
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size: 'small' | 'medium' | 'large' | 'xlarge';
    color?: string;
}

const Title: React.FC<IProps> = ({
                                     as, size, color, className,
                                     children, ...props
                                 }) => {
    return createElement(as, {
        className: cn({
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
            [styles.xlarge]: size === 'xlarge',
        }, className),
        style: {
            color,
        },
        children,
        ...props,
    });
};

export default Title;

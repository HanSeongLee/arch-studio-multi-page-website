import React, { createElement, ElementType } from 'react';
import styles from 'components/commons/Button/style.module.scss';
import cn from 'classnames';
import { IconName } from 'constants/Icons';
import Icon from 'components/commons/Icon';
import { COLORS } from 'styles/colors';

interface IProps<T extends ElementType = 'button' | 'a' | 'div'> {
    as?: T;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'tab' | 'icon';
    size?: 'square';
    active?: boolean;
    iconName?: IconName;
    iconColor?: string;
    iconSize?: 'medium' | 'large';
    className?: string;
    href?: string;
    external?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
                                      as = 'button', type = 'button', variant, size, active = false,
                                      iconName, iconColor, iconSize, className,
                                      external, children, ...props
                                  }) => {
    return createElement(as, {
        className: cn(styles.button, {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.tab]: variant === 'tab',
            [styles.icon]: variant === 'icon',

            [styles.square]: size === 'square',

            [styles.active]: active,
        }, className),
        children: (
            <>
                {children}
                {iconName && (
                    <Icon name={iconName}
                          strokeColor={variant === 'secondary' ? COLORS.VERY_DARK_BLUE : COLORS.WHITE}
                          color={iconColor}
                          size={iconSize}
                    />
                )}
            </>
        ),
        type: as === 'button' ? type : undefined,
        target: props.href && external ? '_blank' : undefined,
        ...props,
    });
};

export default Button;

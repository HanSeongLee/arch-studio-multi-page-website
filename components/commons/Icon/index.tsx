import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { IconName, ICONS } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
    name: IconName;
    strokeColor?: string;
    color?: string;
    size?: 'medium' | 'large';
    className?: string;
}

const Icon: React.FC<IProps> = ({
                                    name, strokeColor, color, size = 'medium',
                                    className, ...props
                                }) => {
    return (
        <span className={cn(styles.icon, {
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',

            [styles.color]: color,
            [styles.strokeColor]: strokeColor,
        }, className)}
              style={{
                  '--color-icon': color,
                  '--color-stroke-icon': strokeColor,
              } as React.CSSProperties}
              {...props}
        >
            {ICONS[name]}
        </span>
    );
};

export default Icon;

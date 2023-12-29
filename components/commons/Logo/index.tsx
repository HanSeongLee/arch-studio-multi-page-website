import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import ArchLogo from 'public/logo.svg';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    size?: 'small' | 'medium';
    dark?: boolean;
}

const Logo: React.FC<IProps> = ({ size = 'medium', dark, className, ...props }) => {
    return (
        <Link className={cn(styles.logo, {
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',

            [styles.dark]: dark,
        }, className)}
              href={'/'}
              aria-label={process.env.NEXT_PUBLIC_TITLE || 'Arch Studio'}
              {...props}
        >
            <ArchLogo />
        </Link>
    );
};

export default Logo;

import React, { AnchorHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import ArchLogo from 'public/logo.svg';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    dark?: boolean;
}

const Logo: React.FC<IProps> = ({ dark, className, ...props }) => {
    return (
        <Link className={cn(styles.logo, {
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

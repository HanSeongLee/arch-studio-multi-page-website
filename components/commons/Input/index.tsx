import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    error: string;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(({
                                                              error, className, children, ...props
                                                          }, ref) => {
    return (
        <div className={cn(styles.inputWrapper, {
            [styles.error]: error,
        }, className)}
        >
            <input className={styles.input}
                   {...props}
                   ref={ref}
            />
            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}
        </div>
    );
});

export default Input;

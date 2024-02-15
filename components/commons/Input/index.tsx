import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    labelHidden?: boolean;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(({
                                                              label, labelHidden, error, className,
                                                              children, ...props
                                                          }, ref) => {
    return (
        <div className={cn(styles.inputWrapper, {
            [styles.labelHidden]: labelHidden,
            [styles.error]: error,
        }, className)}
        >
            <label>
                <span className={styles.labelText}>
                    {label}
                </span>
                <input className={styles.input}
                       {...props}
                       ref={ref}
                />
            </label>
            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}
        </div>
    );
});

export default Input;

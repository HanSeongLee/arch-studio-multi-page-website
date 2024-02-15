import React, { InputHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    labelHidden?: boolean;
    error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, IProps>(({
                                                              label, labelHidden, error, className,
                                                                    children, ...props
                                                          }, ref) => {
    return (
        <div className={cn(styles.textAreaWrapper, {
            [styles.labelHidden]: labelHidden,
            [styles.error]: error,
        }, className)}
        >
            <label>
                <span className={styles.labelText}>
                    {label}
                </span>
                <textarea className={styles.textArea}
                          rows={1}
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

export default TextArea;

import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLTextAreaElement> {
    error: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, IProps>(({
                                                              error, className, children, ...props
                                                          }, ref) => {
    return (
        <div className={cn(styles.textAreaWrapper, {
            [styles.error]: error,
        }, className)}
        >
            <textarea className={styles.textArea}
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

export default TextArea;

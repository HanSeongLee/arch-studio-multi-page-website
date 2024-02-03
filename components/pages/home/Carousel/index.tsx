import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Button from 'components/commons/Button';

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
    interval?: number;
    autoplay?: boolean;
    children: React.ReactNode[];
}

const Carousel: React.FC<IProps> = ({
                                        interval = 5000, autoplay = true, className, children,
                                        ...props
                                    }) => {
    const stateRef = useRef<{
        play: boolean,
    }>({
        play: true,
    });
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const slideLength = React.Children.count(children);

    const handleIndicatorButtonClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleSlideMouseEnter = () => {
        stateRef.current.play = false;
    };

    const handleSlideMouseLeave = () => {
        stateRef.current.play = true;
    };

    useEffect(() => {
        if (!autoplay) {
            return;
        }

        const intervalId = setInterval(() => {
            if (!stateRef.current.play) {
                return;
            }

            setActiveIndex((index) => (index + 1) % slideLength);
        }, interval);

        return () => {
            clearInterval(intervalId);
        };
    }, [autoplay, interval, slideLength]);

    return (
        <div className={cn(styles.carousel, className)}
             {...props}
        >
            <div onMouseEnter={handleSlideMouseEnter}
                 onMouseLeave={handleSlideMouseLeave}
            >
                {(children && children.length) && children[activeIndex]}
            </div>
            <ul className={styles.indicator}>
                {Array.from({ length: slideLength }).map((_, index) => (
                    <li key={index}>
                        <Button variant={'tab'}
                                size={'square'}
                                active={index === activeIndex}
                                onClick={() => handleIndicatorButtonClick(index)}
                        >
                            {index + 1}
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Carousel;

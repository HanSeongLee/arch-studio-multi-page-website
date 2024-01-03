import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import SocialCard from 'components/pages/about/SocialCard';
import { ISocialCard } from 'types/social-card';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    items: ISocialCard[];
}

const SocialCardContainer: React.FC<IProps> = ({ items, className, children, ...props }) => {
    return (
        <div className={cn(className)}
             {...props}
        >
            {items.map((item) => (
                <SocialCard key={item._id}
                            {...item}
                />
            ))}
        </div>
    );
};

export default SocialCardContainer;

import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import PortfolioCard from 'components/pages/portfolio/PortfolioCard';
import { Portfolio } from 'types/portfolio';
import { convertDateToMonthNameYear } from 'constants/date';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    items: Portfolio[];
}

const PortfolioContainer: React.FC<IProps> = ({ items, className, children, ...props }) => {
    return (
        <div className={cn(className)}
             {...props}
        >
            {items.map((item, _) => {
                const description = convertDateToMonthNameYear(new Date(item.date))

                return (
                    <PortfolioCard key={item._id}
                                   {...item}
                                   description={description}
                    />
                );
            })}
        </div>
    );
};

export default PortfolioContainer;

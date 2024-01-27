import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import PortfolioCard from 'components/pages/portfolio/PortfolioCard';
import { convertDateToMonthNameYear } from 'constants/date';
import { IPortfolio } from 'types/portfolio';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    items: IPortfolio[];
    enableCounter?: boolean;
    transformDescription?: (item: IPortfolio) => string;
}

const PortfolioContainer: React.FC<IProps> = ({
                                                  items, enableCounter, transformDescription = (item) => convertDateToMonthNameYear(new Date(item.date)), className,
                                                  children, ...props
                                              }) => {
    return (
        <div className={cn(className)}
             {...props}
        >
            {items.map((item, _) => {
                const description = transformDescription(item);

                return (
                    <PortfolioCard key={item._id}
                                   {...item}
                                   description={description}
                                   enableCounter={enableCounter}
                    />
                );
            })}
        </div>
    );
};

export default PortfolioContainer;

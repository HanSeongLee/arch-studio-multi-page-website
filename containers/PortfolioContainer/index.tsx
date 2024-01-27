import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import PortfolioCard from 'components/pages/portfolio/PortfolioCard';
import { convertDateToMonthNameYear } from 'constants/date';
import { IPortfolio } from 'types/portfolio';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    items: IPortfolio[];
    render?: (item: IPortfolio) => React.ReactNode;
}

const PortfolioContainer: React.FC<IProps> = ({
                                                  items, render, className, children,
                                                  ...props
                                              }) => {
    const defaultRender = (item: IPortfolio) => {
        const description = convertDateToMonthNameYear(new Date(item.date));

        return (
            <PortfolioCard key={item._id}
                           {...item}
                           description={description}
            />
        );
    };

    const renderFn = render || defaultRender;

    return (
        <div className={cn(className)}
             {...props}
        >
            {items.map(renderFn)}
        </div>
    );
};

export default PortfolioContainer;

import React, { HTMLAttributes } from 'react';
import ContactDetailsCard from 'components/pages/contact/ContactDetailsCard';
import { IContactDetails } from 'types/contact';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    items: IContactDetails[];
    onViewOnMapClick?: (item: IContactDetails) => void;
}

const ContactDetailsCardContainer: React.FC<IProps> = ({ items, onViewOnMapClick, ...props }) => {
    return (
        <div {...props}>
            {items.map((item, _) => {
                return (
                    <ContactDetailsCard key={item._id}
                                        onViewOnMapClick={() => onViewOnMapClick && onViewOnMapClick(item)}
                                        {...item}
                    />
                );
            })}
        </div>
    );
};

export default ContactDetailsCardContainer;

import React, { HTMLAttributes } from 'react';
import ContactDetailsCard from 'components/pages/contact/ContactDetailsCard';
import { IContactDetails } from 'types/contact';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    items: IContactDetails[];
}

const ContactDetailsCardContainer: React.FC<IProps> = ({ items, ...props }) => {
    return (
        <div {...props}>
            {items.map((item, _) => {
                return (
                    <ContactDetailsCard key={item._id}
                                        {...item}
                    />
                );
            })}
        </div>
    );
};

export default ContactDetailsCardContainer;

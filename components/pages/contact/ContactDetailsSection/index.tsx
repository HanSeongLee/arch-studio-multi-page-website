import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Title from 'components/commons/Typography/Title';
import ContactDetailsCardContainer from 'containers/ContactDetailsCardContainer';
import { IContactDetails } from 'types/contact';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    contactDetailsItems: IContactDetails[];
}

const ContactDetailsSection: React.FC<IProps> = ({ contactDetailsItems, className, children, ...props }) => {
    return (
        <section className={cn(styles.contactDetailsSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <Title className={styles.title}
                       as={'h2'}
                       size={'medium'}
                >
                    {'Contact \nDetails'}
                </Title>
                <ContactDetailsCardContainer className={styles.contactDetailsCardContainer}
                                             items={contactDetailsItems}
                />
            </Container>
        </section>
    );
};

export default ContactDetailsSection;

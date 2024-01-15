import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { IContactDetails } from 'types/contact';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';

interface IProps extends HTMLAttributes<HTMLDivElement>, IContactDetails {
    onViewOnMapClick?: () => void;
}

const ContactDetailsCard: React.FC<IProps> = ({
                                                  className, name, mail, phone, address,
                                                  onViewOnMapClick, ...props
                                              }) => {
    return (
        <div className={cn(styles.contactDetailsCard, className)}
             {...props}
        >
            <div className={styles.content}>
                <div className={styles.name}>
                    {name}
                </div>

                <div>
                    Mail :&nbsp;&nbsp;{mail}
                </div>
                <div>
                    Address :&nbsp;&nbsp;{address}
                </div>
                <div>
                    Phone :&nbsp;&nbsp;{phone}
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <Button variant={'secondary'}
                        iconName={IconName.Arrow}
                        onClick={onViewOnMapClick}
                >
                    View on Map
                </Button>
            </div>
        </div>
    );
};

export default ContactDetailsCard;

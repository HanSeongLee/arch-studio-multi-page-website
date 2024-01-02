import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Image from 'components/commons/Image';
import Title from 'components/commons/Typography/Title';
import Paragraph from 'components/commons/Typography/Paragraphy';
import { ISocialCard } from 'types/social-card';
import Button from 'components/commons/Button';
import { IconName } from 'constants/Icons';
import { COLORS } from 'styles/colors';

interface IProps extends HTMLAttributes<HTMLDivElement>, ISocialCard {

}

const SocialCard: React.FC<IProps> = ({
                                          avatar, name, affiliation, socials,
                                          className, children, ...props
                                      }) => {
    return (
        <div className={cn(styles.socialCard, className)}
             {...props}
        >
            <div className={styles.avatarWrapper}>
                <Image src={avatar}
                       alt={''}
                       fill
                />
                <div className={styles.overlay}>
                    {socials.linkedin && (
                        <Button as={'a'}
                                variant={'icon'}
                                href={socials.linkedin}
                                iconName={IconName.LINKEDIN}
                                iconColor={COLORS.WHITE}
                                iconSize={'large'}
                                external
                        />
                    )}
                    {socials.twitter && (
                        <Button as={'a'}
                                variant={'icon'}
                                href={socials.twitter}
                                iconName={IconName.TWITTER}
                                iconColor={COLORS.WHITE}
                                iconSize={'large'}
                                external
                        />
                    )}
                </div>
            </div>
            <Title className={styles.title}
                   as={'h3'}
                   size={'small'}
            >
                {name}
            </Title>
            <Paragraph>
                {affiliation}
            </Paragraph>
        </div>
    );
};

export default SocialCard;

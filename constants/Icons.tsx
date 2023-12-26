import React from 'react';
import ArrowIcon from 'public/icons/icon-arrow.svg';
import CloseIcon from 'public/icons/icon-close.svg';
import HamburgerIcon from 'public/icons/icon-hamburger.svg';
import LinkedinIcon from 'public/icons/icon-linkedin.svg';
import TwitterIcon from 'public/icons/icon-twitter.svg';

export enum IconName {
    Arrow = 'arrow',
    Close = 'close',
    HAMBURGER = 'hamburger',
    LINKEDIN = 'linkedin',
    TWITTER = 'twitter',
}

export const ICONS: { [key in IconName]: React.ReactNode } = {
    [IconName.Arrow]: <ArrowIcon />,
    [IconName.Close]: <CloseIcon />,
    [IconName.HAMBURGER]: <HamburgerIcon />,
    [IconName.LINKEDIN]: <LinkedinIcon />,
    [IconName.TWITTER]: <TwitterIcon />,
};

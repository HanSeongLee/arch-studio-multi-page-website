import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import HeroSection from 'components/pages/commons/HeroSection';
import IntroSection from 'components/pages/about/IntroSection';
import LeaderSection from 'components/pages/about/LeaderSection';
import { Section, SectionName } from 'types/page';
import ContactDetailsSection from 'components/pages/contact/ContactDetailsSection';
import ContactFormSection from 'components/pages/contact/ContactFormSection';
import FeaturedSection from 'components/pages/home/FeaturedSection';
import CTASection from 'components/pages/home/CTASection';
import CarouselSection from 'components/pages/home/CarouselSection';
import WelcomeSection from 'components/pages/home/WelcomeSection';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    items: Section[];
}

const SectionContainer: React.FC<IProps> = ({ items, className, ...props }) => {
    return (
        <div className={cn(styles.sectionContainer, className)}
             {...props}
        >
            {items.map((section) => {
                switch (section._type) {
                    case SectionName.HERO_SECTION:
                        return (
                            <HeroSection key={section._key}
                                         {...section}
                            />
                        );
                    case SectionName.INTRO_SECTION:
                        return (
                            <IntroSection className={styles.introSection}
                                          key={section._key}
                                          {...section}
                            />
                        );
                    case SectionName.LEADER_SECTION:
                        return (
                            <LeaderSection className={styles.leaderSection}
                                           key={section._key}
                                           {...section}
                            />
                        );
                    case SectionName.CONTACT_DETAILS_SECTION:
                        return (
                            <ContactDetailsSection className={styles.contactDetailsSection}
                                                   key={section._key}
                                                   {...section}
                            />
                        );
                    case SectionName.CONTACT_FORM_SECTION:
                        return (
                            <ContactFormSection className={styles.contactFormSection}
                                                key={section._key}
                                                {...section}
                            />
                        );
                    case SectionName.FEATURED_SECTION:
                        return (
                            <FeaturedSection className={styles.featuredSection}
                                             key={section._key}
                                             {...section}
                            />
                        );
                    case SectionName.CTA_SECTION:
                        return (
                            <CTASection className={styles.ctaSection}
                                        key={section._key}
                                        {...section}
                            />
                        );
                    case SectionName.CAROUSEL_SECTION:
                        return (
                            <CarouselSection key={section._key}
                                             {...section}
                            />
                        );
                    case SectionName.WELCOME_SECTION:
                        return (
                            <WelcomeSection className={styles.welcomeSection}
                                            key={section._key}
                                            {...section}
                            />
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default SectionContainer;

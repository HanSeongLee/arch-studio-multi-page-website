import { ResponsiveThumbnail } from 'types/thumbnail';
import { ISocialCard } from 'types/social-card';
import { IContactDetails } from 'types/contact';
import { IPortfolio } from 'types/portfolio';
import { ISlide } from 'types/slide';
import { ImageSrc } from 'types/image';

export type Section =
    IHeroSection |
    IIntroSection |
    ILeaderSection |
    IContactDetailsSection |
    IContactFormSection |
    IFeaturedSection |
    ICTASection |
    ICarouselSection |
    IWelcomeSection;

export enum SectionName {
    HERO_SECTION = 'heroSection',
    INTRO_SECTION = 'introSection',
    LEADER_SECTION = 'leaderSection',
    CONTACT_DETAILS_SECTION = 'contactDetailsSection',
    CONTACT_FORM_SECTION = 'contactFormSection',
    FEATURED_SECTION = 'featuredSection',
    CTA_SECTION = 'ctaSection',
    CAROUSEL_SECTION = 'carouselSection',
    WELCOME_SECTION = 'welcomeSection',
}

export const SECTION_NAME_TYPES = Object.values(SectionName).map((name) => {
    return {
        type: name,
    };
});

export interface IPage {
    _id: string;
    _type: 'pages',
    slug: {
        _type: 'slug',
        current: string;
    };
    title: string;
    sections: Array<Section>;
}

interface IBaseSection {
    _key: string;
    _type: string;
    title: string;
}

interface IHeroSection extends IBaseSection {
    _type: SectionName.HERO_SECTION;
    subtitle: string;
    description: string;
    thumbnail: ResponsiveThumbnail;
}

interface IIntroSection extends IBaseSection {
    _type: SectionName.INTRO_SECTION;
    description: string;
    thumbnail: ResponsiveThumbnail;
}

interface ILeaderSection extends IBaseSection {
    _type: SectionName.LEADER_SECTION;
    socialCardItems: ISocialCard[];
}

interface IContactDetailsSection extends IBaseSection {
    _type: SectionName.CONTACT_DETAILS_SECTION;
    officeItems: IContactDetails[];
}

interface IContactFormSection extends IBaseSection {
    _type: SectionName.CONTACT_FORM_SECTION;
    title: string;
}

interface IFeaturedSection extends IBaseSection {
    _type: SectionName.FEATURED_SECTION;
    title: string;
    portfolioItems: IPortfolio[];
}

interface ICTASection extends IBaseSection {
    _type: SectionName.CTA_SECTION;
    title: string;
    thumbnail: ResponsiveThumbnail;
    ctaButton: {
        text: string;
        url: string;
    }
}

interface ICarouselSection extends IBaseSection {
    _type: SectionName.CAROUSEL_SECTION;
    slides: ISlide[];
}

interface IWelcomeSection extends IBaseSection {
    _type: SectionName.WELCOME_SECTION;
    subtitle: string;
    title: string;
    description: string;
    thumbnail: ImageSrc;
}

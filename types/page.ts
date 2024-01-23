import { ResponsiveThumbnail } from 'types/thumbnail';
import { ISocialCard } from 'types/social-card';
import { IContactDetails } from 'types/contact';

export type Section =
    IHeroSection |
    IIntroSection |
    ILeaderSection |
    IContactDetailsSection |
    IContactFormSection;

export enum SectionName {
    HERO_SECTION = 'heroSection',
    INTRO_SECTION = 'introSection',
    LEADER_SECTION = 'leaderSection',
    CONTACT_DETAILS_SECTION = 'contactDetailsSection',
    CONTACT_FORM_SECTION = 'contactFormSection',
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

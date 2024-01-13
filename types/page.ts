import { ResponsiveThumbnail } from 'types/thumbnail';
import { ISocialCard } from 'types/social-card';

export type Section = IHeroSection | IIntroSection | ILeaderSection;

export enum SectionName {
    HERO_SECTION = 'heroSection',
    INTRO_SECTION = 'introSection',
    LEADER_SECTION = 'leaderSection',
}

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
    items: ISocialCard[];
}

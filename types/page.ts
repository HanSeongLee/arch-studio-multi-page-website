import { ResponsiveThumbnail } from 'types/thumbnail';
import { ISocialCard } from 'types/social-card';

export interface IPage {
    _id: string;
    _type: 'pages',
    slug: {
        _type: 'slug',
        current: string;
    };
    title: string;
    sections: Array<IHeroSection | IIntroSection | ILeaderSection>;
}

interface IBaseSection {
    _key: string;
    _type: string;
    title: string;
}

interface IHeroSection extends IBaseSection {
    _type: 'heroSection';
    subtitle: string;
    description: string;
    thumbnail: ResponsiveThumbnail;
}

interface IIntroSection extends IBaseSection {
    _type: 'introSection';
    description: string;
    thumbnail: ResponsiveThumbnail;
}

interface ILeaderSection extends IBaseSection {
    _type: 'leaderSection';
    items: ISocialCard[];
}

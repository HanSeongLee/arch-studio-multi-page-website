import { type SchemaTypeDefinition } from 'sanity';

import portfolio from 'lib/sanity/schemas/portfolio';
import socialCard from 'lib/sanity/schemas/social-card';
import heroSection from 'lib/sanity/schemas/sections/hero-section';
import introSection from 'lib/sanity/schemas/sections/Intro-section';
import page from 'lib/sanity/schemas/page';
import leaderSection from 'lib/sanity/schemas/sections/leader-section';
import office from 'lib/sanity/schemas/office';
import contactDetailsSection from 'lib/sanity/schemas/sections/contact-details-section';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    portfolio, socialCard, heroSection, introSection,
    leaderSection, office, contactDetailsSection, page,
  ],
};

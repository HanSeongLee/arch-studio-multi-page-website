import { type SchemaTypeDefinition } from 'sanity';

import portfolio from 'lib/sanity/schemas/portfolio';
import socialCard from 'lib/sanity/schemas/social-card';
import heroSection from 'lib/sanity/schemas/sections/hero-section';
import introSection from 'lib/sanity/schemas/sections/Intro-section';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    portfolio, socialCard, heroSection, introSection,
  ],
};

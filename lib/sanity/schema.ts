import { type SchemaTypeDefinition } from 'sanity';

import portfolio from 'lib/sanity/schemas/portfolio';
import socialCard from 'lib/sanity/schemas/social-card';
import heroSection from 'lib/sanity/schemas/sections/hero-section';
import introSection from 'lib/sanity/schemas/sections/Intro-section';
import page from 'lib/sanity/schemas/page';
import leaderSection from 'lib/sanity/schemas/sections/leader-section';
import office from 'lib/sanity/schemas/office';
import contactDetailsSection from 'lib/sanity/schemas/sections/contact-details-section';
import contactFormSection from 'lib/sanity/schemas/sections/contact-form-section';
import featuredSection from 'lib/sanity/schemas/sections/featured-section';
import ctaSection from 'lib/sanity/schemas/sections/cta-section';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    portfolio, socialCard, heroSection, introSection,
    leaderSection, office, contactDetailsSection, contactFormSection,
    featuredSection, ctaSection, page,
  ],
};

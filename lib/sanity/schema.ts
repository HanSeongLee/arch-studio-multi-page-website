import { type SchemaTypeDefinition } from 'sanity';

import portfolio from 'lib/sanity/schemas/portfolio';
import socialCard from 'lib/sanity/schemas/social-card';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    portfolio, socialCard,
  ],
};

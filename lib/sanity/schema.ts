import { type SchemaTypeDefinition } from 'sanity';

import portfolio from 'lib/sanity/schemas/portfolio';

export const schema: { types: SchemaTypeDefinition[]; } = {
  types: [
    portfolio,
  ],
};

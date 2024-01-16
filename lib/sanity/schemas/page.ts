import { defineField, defineType } from 'sanity';
import { SECTION_NAME_TYPES } from 'types/page';

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'sections',
            title: 'Sections',
            type: 'array',
            of: SECTION_NAME_TYPES,
        }),
    ],
});

import { defineField, defineType } from 'sanity';
import { SectionName } from 'types/page';

export default defineType({
    name: SectionName.FEATURED_SECTION,
    title: 'Featured Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'portfolioItems',
            title: 'Portfolio Items',
            type: 'array',
            of: [{
                type: 'reference',
                to: [
                    { type: 'portfolio' },
                ],
            }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'portfolioItems',
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: `${subtitle.length} items`,
            }
        }
    }
});

import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'leaderSection',
    title: 'Leader Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                defineField({
                    name: 'socialCard',
                    title: 'Social Card',
                    type: 'reference',
                    to: [
                        { type: 'socialCard' },
                    ],
                })
            ]
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'items',
        },
        prepare({ title, subtitle }) {
            return {
                title,
                subtitle: `${subtitle.length} items`,
            }
        }
    }
});

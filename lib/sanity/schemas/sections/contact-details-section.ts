import { defineField, defineType } from 'sanity';
import { SectionName } from 'types/page';

export default defineType({
    name: SectionName.CONTACT_DETAILS_SECTION,
    title: 'Contact Details Section',
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
                    name: 'office',
                    title: 'Office',
                    type: 'reference',
                    to: [
                        { type: 'office' },
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

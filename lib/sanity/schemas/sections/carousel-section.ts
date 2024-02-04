import { defineField, defineType } from 'sanity';
import { SectionName } from 'types/page';

export default defineType({
    name: SectionName.CAROUSEL_SECTION,
    title: 'Carousel Section',
    type: 'document',
    fields: [
        defineField({
            name: 'slides',
            title: 'Slides',
            type: 'array',
            of: [{
                type: 'reference',
                to: [
                    { type: 'slide' },
                ],
            }],
        }),
    ],
    preview: {
        select: {
            subtitle: 'slides',
        },
        prepare({ subtitle }) {
            return {
                title: 'Carousel Section',
                subtitle: `${subtitle.length} slides`,
            }
        }
    }
});

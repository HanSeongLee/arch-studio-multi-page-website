import { defineField, defineType } from 'sanity';
import { SectionName } from 'types/page';

export default defineType({
    name: SectionName.CONTACT_FORM_SECTION,
    title: 'Contact Form Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'text',
            rows: 2,
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    }
});

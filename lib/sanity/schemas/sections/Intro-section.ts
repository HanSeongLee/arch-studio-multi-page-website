import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'introSection',
    title: 'Intro Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
            media: 'thumbnail',
        },
    }
});

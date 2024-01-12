import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'introSection',
    title: 'Intro Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'object',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }),
                defineField({
                    name: 'mobile',
                    title: 'Mobile',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                }),
                defineField({
                    name: 'tablet',
                    title: 'Tablet',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                }),
                defineField({
                    name: 'desktop',
                    title: 'Desktop',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                }),
            ],
        }),
    ],
});

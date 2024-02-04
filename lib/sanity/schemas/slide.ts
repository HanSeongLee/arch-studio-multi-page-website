import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'slide',
    title: 'Slide',
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
            type: 'string',
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
        defineField({
            name: 'ctaText',
            title: 'CTA Text',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            description: 'description',
            thumbnail: 'thumbnail',
        },
        prepare({ title, description, thumbnail }) {
            return {
                title,
                subtitle: description,
                media: thumbnail?.mobile,
            };
        },
    }
});

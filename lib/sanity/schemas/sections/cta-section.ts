import { defineField, defineType } from 'sanity';
import { SectionName } from 'types/page';

export default defineType({
    name: SectionName.CTA_SECTION,
    title: 'CTA Section',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'text',
            rows: 2,
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
            name: 'ctaButton',
            title: 'CTA Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'text',
                    title: 'Text',
                    type: 'string',
                }),
                defineField({
                    name: 'url',
                    title: 'URL',
                    type: 'string',
                }),
            ],
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'ctaButton.text',
            media: 'thumbnail.mobile',
        },
    }
});

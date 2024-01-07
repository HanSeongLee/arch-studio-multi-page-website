import { defineField, defineType } from 'sanity';
import { convertDateToMonthNameYear } from 'constants/date';

export default defineType({
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
            },
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
    preview: {
        select: {
            title: 'title',
            date: 'date',
            thumbnail: 'thumbnail',
        },
        prepare({ title, date, thumbnail }) {
            const subtitle = convertDateToMonthNameYear(new Date(date));
            return {
                title,
                subtitle,
                media: thumbnail?.mobile,
            };
        },
    }
});

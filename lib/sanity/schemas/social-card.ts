import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'socialCard',
    title: 'Social Card',
    type: 'document',
    fields: [
        defineField({
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'affiliation',
            title: 'Affiliation',
            type: 'string',
        }),
        defineField({
            name: 'socials',
            title: 'Socials',
            type: 'object',
            fields: [
                defineField({
                    name: 'linkedin',
                    title: 'Linkedin URL',
                    type: 'url',
                }),
                defineField({
                    name: 'twitter',
                    title: 'Twitter URL',
                    type: 'url',
                })
            ]
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'affiliation',
            media: 'avatar',
        },
    }
});

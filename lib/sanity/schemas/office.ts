import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'office',
    title: 'Office',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'mail',
            title: 'Mail',
            type: 'email',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'geopoint',
        }),
    ],
});

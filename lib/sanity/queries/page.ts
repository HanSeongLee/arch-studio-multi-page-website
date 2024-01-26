import { client } from 'lib/sanity/lib/client';
import groq from 'groq';
import { IPage } from 'types/page';

export const fetchPage = async (slug: string) => {
    return await client.fetch(groq`
    *[_type == "page" && slug.current == "${slug}"][0] {
        title,
        "sections": sections[]{
            ...,
            "socialCardItems": *[ _type == "socialCard"],
            "officeItems": *[ _type == "office"]
        },
    }`) as IPage;
};

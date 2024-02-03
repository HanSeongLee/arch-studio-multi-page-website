import type { Meta, StoryObj } from '@storybook/react';

import Carousel from './index';
import Slide from 'components/pages/home/Slide';

const meta: Meta<typeof Carousel> = {
    title: 'Components/pages/home/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const slides = [
    {
        title: 'Project \nParamour',
        description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
        thumbnail: {
            mobile: '/img/home/mobile/image-hero-paramour.jpg',
            tablet: '/img/home/tablet/image-hero-paramour.jpg',
            desktop: '/img/home/desktop/image-hero-paramour.jpg',
        },
        ctaText: 'See Our Portfolio',
        url: '/portfolio',
    },
    {
        title: 'Seraph \nStation',
        description: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
        thumbnail: {
            mobile: '/img/home/mobile/image-hero-seraph.jpg',
            tablet: '/img/home/tablet/image-hero-seraph.jpg',
            desktop: '/img/home/desktop/image-hero-seraph.jpg',
        },
        ctaText: 'See Our Portfolio',
        url: '/portfolio',
    },
    {
        title: 'Federal II \nTower',
        description: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
        thumbnail: {
            mobile: '/img/home/mobile/image-hero-federal.jpg',
            tablet: '/img/home/tablet/image-hero-federal.jpg',
            desktop: '/img/home/desktop/image-hero-federal.jpg',
        },
        ctaText: 'See Our Portfolio',
        url: '/portfolio',
    },
    {
        title: 'Trinity Bank \nTower',
        description: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
        thumbnail: {
            mobile: '/img/home/mobile/image-hero-trinity.jpg',
            tablet: '/img/home/tablet/image-hero-trinity.jpg',
            desktop: '/img/home/desktop/image-hero-trinity.jpg',
        },
        ctaText: 'See Our Portfolio',
        url: '/portfolio',
    },
];

export const Default: Story = {
    args: {
        children: slides.map((slide, index) => (
            <Slide key={index}
                   {...slide}
            />
        )),
    },
};

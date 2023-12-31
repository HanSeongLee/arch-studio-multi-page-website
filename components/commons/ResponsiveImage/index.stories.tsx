import type { Meta, StoryObj } from '@storybook/react';

import ResponsiveImage from './index';
import styles from './style.module.scss';

const meta: Meta<typeof ResponsiveImage> = {
    title: 'Components/commons/ResponsiveImage',
    component: ResponsiveImage,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof ResponsiveImage>;

export const Default: Story = {
    args: {
        srcSet: {
            mobile: '/img/portfolio/mobile/image-seraph.jpg',
            tablet: '/img/portfolio/tablet/image-seraph.jpg',
            desktop: '/img/portfolio/desktop/image-seraph.jpg',
        },
        width: 400,
        height: 400,
    },
};

export const Fill: Story = {
    args: {
        srcSet: {
            mobile: '/img/portfolio/mobile/image-seraph.jpg',
            tablet: '/img/portfolio/tablet/image-seraph.jpg',
            desktop: '/img/portfolio/desktop/image-seraph.jpg',
        },
        fill: true,
    },
    decorators: [
        (Story) => (
            <div className={styles.fillExample}>
                <Story />
            </div>
        )
    ],
};

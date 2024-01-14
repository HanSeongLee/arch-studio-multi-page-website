import type { Meta, StoryObj } from '@storybook/react';

import Menu from './index';
import React from 'react';
import styles from './style.module.scss';

const meta: Meta<typeof Menu> = {
    title: 'Components/commons/Map',
    component: Menu,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
    decorators: (Story) => (
        <div className={styles.mapContainer}>
            <Story />
        </div>
    ),
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    args: {
        bounds: [
            [35.8017288, -88.618196],
            [33.3328504, -96.1706446]
        ],
        children: ({ TileLayer, Marker, Popup }) => (
            <>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={[35.8017288, -88.618196]}>
                    <Popup>
                        Point 1
                    </Popup>
                </Marker>
                <Marker position={[33.3328504, -96.1706446]}>
                    <Popup>
                        Point 2
                    </Popup>
                </Marker>
            </>
        )
    },
};

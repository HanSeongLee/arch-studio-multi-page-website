import type { Meta, StoryObj } from '@storybook/react';

import CounterGroup from './index';
import styles from './style.module.scss';

const meta: Meta<typeof CounterGroup> = {
    title: 'Components/commons/CounterGroup',
    component: CounterGroup,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof CounterGroup>;

const CounterItem = () => {
    return (
        <div className={styles.counterItemExample}></div>
    );
};

export const Default: Story = {
    args: {
        children: (
            <>
                <CounterItem />
                <CounterItem />
                <CounterItem />
            </>
        ),
    },
};

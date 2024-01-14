import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';

const DynamicMap = dynamic(
    () => import('./DynamicMap'),
    { ssr: false }
);

interface IProps extends Omit<ReactLeaflet.MapContainerProps, 'children'> {
    children: (ReactLeafletUtils: typeof ReactLeaflet, LeafletUtils: typeof Leaflet) => React.ReactNode;
}

const Map: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.map, className)}>
            <DynamicMap {...props} />
        </div>
    );
};

export default Map;

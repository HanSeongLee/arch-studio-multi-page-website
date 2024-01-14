import React, { forwardRef } from 'react';
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

const Map = forwardRef<Leaflet.Map, IProps>(({ className, ...props }, ref) => {
    return (
        <div className={cn(styles.map, className)}>
            <DynamicMap {...props}
                        forwardedRef={ref}
            />
        </div>
    );
});

export default Map;

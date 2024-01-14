import React, { useEffect } from 'react';
import styles from './style.module.scss';
import Leaflet from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';

const { MapContainer } = ReactLeaflet;

interface IProps extends Omit<ReactLeaflet.MapContainerProps, 'children'> {
    children: (ReactLeafletUtils: typeof ReactLeaflet, LeafletUtils: typeof Leaflet) => React.ReactNode;
    forwardedRef?: React.Ref<Leaflet.Map>;
}

const DynamicMap: React.FC<IProps> = ({ className, children, forwardedRef, ...props }) => {

    useEffect(() => {
        (async () => {
            delete (Leaflet.Icon.Default.prototype as any)._getIconUrl;
            Leaflet.Icon.Default.mergeOptions({
                iconRetinaUrl: 'icons/icon-marker.svg',
                iconUrl: 'icons/icon-marker.svg',
                shadowUrl: 'leaflet/images/marker-shadow.png',
            });
        })();
    }, []);

    return (
        <MapContainer className={cn(styles.dynamicMap, className)}
                      {...props}
                      ref={forwardedRef}
        >
            {children(ReactLeaflet, Leaflet)}
        </MapContainer>
    );
};

export default DynamicMap;

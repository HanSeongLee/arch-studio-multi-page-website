import React, { HTMLAttributes, useRef } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/commons/Container';
import Title from 'components/commons/Typography/Title';
import ContactDetailsCardContainer from 'containers/ContactDetailsCardContainer';
import { IContactDetails } from 'types/contact';
import Map from 'components/commons/Map';
import * as Leaflet from 'leaflet';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    items: IContactDetails[];
}

const ContactDetailsSection: React.FC<IProps> = ({
                                                     title, items, className, children,
                                                     ...props
                                                 }) => {
    const mapRef = useRef<Leaflet.Map>(null);
    const bounds: Leaflet.LatLngTuple[] = items.map((item) => {
        const { location } = item;
        return [location.lat, location.lng];
    });

    const handleViewOnMapClick = (item: IContactDetails) => {
        const { location } = item;
        const map = mapRef.current;
        if (!map) {
            return ;
        }
        map.flyTo([location.lat, location.lng]);
    };

    return (
        <section className={cn(styles.contactDetailsSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <Title className={styles.title}
                       as={'h2'}
                       size={'medium'}
                >
                    {title}
                </Title>
                <ContactDetailsCardContainer className={styles.contactDetailsCardContainer}
                                             items={items}
                                             onViewOnMapClick={handleViewOnMapClick}
                />
            </Container>
            <div className={styles.mapContainer}>
                <Map bounds={bounds}
                     ref={mapRef}
                >
                    {({ TileLayer, Marker, Popup, useMap }) => (
                        <>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                            />
                            {items.map((item, index) => {
                                const { location } = item;
                                return (
                                    <Marker key={index}
                                            position={[location.lat, location.lng]}
                                    >
                                        <Popup>
                                            <strong>{item.name}</strong>
                                            <br /><br />
                                            Mail: {item.mail}<br />
                                            Address: {item.address}<br />
                                            Phone: {item.phone}
                                        </Popup>
                                    </Marker>
                                );
                            })}
                        </>
                    )}
                </Map>
            </div>
        </section>
    );
};

export default ContactDetailsSection;

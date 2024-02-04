import React, { HTMLAttributes } from 'react';
import Carousel from 'components/pages/home/Carousel';
import { ISlide } from 'types/slide';
import Slide from 'components/pages/home/Slide';
import Container from 'components/commons/Container';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    slides: ISlide[];
}

const CarouselSection: React.FC<IProps> = ({ slides, ...props }) => {
    return (
        <section {...props}>
            <Container disable={{
                mobile: true,
            }}>
                <Carousel>
                    {slides.map((slide) => (
                        <Slide key={slide._id}
                               {...slide}
                        />
                    ))}
                </Carousel>
            </Container>
        </section>
    );
};

export default CarouselSection;

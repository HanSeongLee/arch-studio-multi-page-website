export type Color = keyof typeof COLORS;

export const COLORS = {
    VERY_DARK_BLUE: '#1B1D23',
    DARK_GREY: '#60636D',
    MEDIUM_GREY: '#7D828F',
    LIGHT_GREY: '#C8CCD8',
    VERY_LIGHT_GREY: '#EEEFF4',
    RED: '#DF5656',
    RED_OPACITY_50: 'rgba(223,86,86,0.5)',
    WHITE: '#FFFFFF',
};

export const BRAND_COLORS: { [key: string]: Color; } = {
    PRIMARY: 'VERY_DARK_BLUE',
    PRIMARY_HOVER: 'DARK_GREY',
    PRIMARY_ACTIVE: 'LIGHT_GREY',
    NEUTRAL: 'DARK_GREY',
    BACKGROUND: 'WHITE',
    DANGER: 'RED',
    DANGER_OPACITY_50: 'RED_OPACITY_50',
};

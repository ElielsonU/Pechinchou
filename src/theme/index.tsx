import "styled-components"

const theme = {  
    colors: {
        c1: "#ffffff",
        c2: "#f0f2f5",
        c3: "#f2f4f6",
        c4: "#353a3d",
        c5: "#000000cc",
        c6: "#707274",
        c7: "#db2831",
        c8: "#259c25",
        c9: "#5f7fdb",
        c10: "#d0daf5",
        c11: "#dee0e0",
        c12: "#ffebef",
        c13: "#dee0e0",
        c14: "#db2831",
        c15: "#fff5f5",
        c16: "#fff5f5",
    },
    font_sizes: {
        largest: "2rem",
        large: "1.6rem",
        medium: "1.2rem",
        small: "1rem",
        tiny: "0.8rem"
    },
    breakpoints: {
        desktop: 1336,
        tv: 1115,
        tablet: 768,
        mobile: 550, 
    },
    images: {
        logo: "/icons/header/logo.svg"
    },
    filter: {
        brightness: "",
        opacity: "100%",
        invert: "0",
        whiteto: "brightness(.2) invert(.5) sepia(5) hue-rotate(-40deg) saturate(800%)"
    }
}

const darkTheme = {
    colors: {
        c1: "#272a2c",
        c2: "#1d1f20",
        c3: "#494c4e",
        c4: "#707274",
        c5: "#00000099",
        c6: "#ffffff",
        c7: "#db2831",
        c8: "#259c25",
        c9: "#d0daf5",
        c10: "#5f7fdb",
        c11: "#707274",
        c12: "#521215",
        c13: "#494c4e",
        c14: "#ffffff",
        c15: "#db2831",
        c16: "#521215",
    },
    font_sizes: {
        largest: "2rem",
        large: "1.6rem",
        medium: "1.2rem",
        small: "1rem",
        tiny: "0.8rem"
    },
    breakpoints: {
        desktop: 1336,
        tv: 1115,
        tablet: 768,
        mobile: 550, 
    },
    images: {
        logo: "/icons/header/dark-logo.svg"
    },
    filter: {
        brightness: "100",
        opacity: "40%",
        invert: "1",
        whiteto: "none",
    }
}

type ThemeType = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}

export { theme, darkTheme }
export type { ThemeType }
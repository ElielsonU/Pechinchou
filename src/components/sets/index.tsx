import dynamic from "next/dynamic"; 
import Header from "./Header";
import Footer from "./Footer";

const loading = () => <span className="Loader"/>

const DynamicAside = dynamic(() => import("./Aside"), {
    ssr: false,
    loading
})

const DynamicThemeChanger = dynamic(() => import("./ThemeChanger"), {
    ssr: false,
    loading: () => <span/>
})

const DynamicFooter = dynamic(() => import("./Footer"), {
    ssr: false,
    loading
})

export {
    Header,
    DynamicAside,
    DynamicThemeChanger,
    DynamicFooter
}
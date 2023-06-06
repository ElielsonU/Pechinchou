import Header from "./Header";
import ThemeChanger from "./ThemeChanger";
import dynamic from "next/dynamic";
import Footer from "./Footer";

const DynamicAside = dynamic(() => import("./Aside"), {
    ssr: false,
    loading: () => <span>loading...</span>
})

export {
    Header,
    DynamicAside,
    ThemeChanger,
    Footer
}
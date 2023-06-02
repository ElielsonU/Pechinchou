import Header from "./Header";
import ThemeChanger from "./ThemeChanger";
import dynamic from "next/dynamic";

const DynamicAside = dynamic(() => import("./Aside"), {
    ssr: false,
    loading: () => <span>loading...</span>
})

export {
    Header,
    DynamicAside,
    ThemeChanger
}
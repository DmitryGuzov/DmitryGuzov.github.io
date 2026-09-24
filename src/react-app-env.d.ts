/// <reference types="react-scripts" />

declare module "react-reveal";
declare module "*.pdf";
declare module "*.svg" {
    const src: string;
    export default src;
}

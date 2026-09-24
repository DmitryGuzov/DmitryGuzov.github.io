import { PortfolioModel } from "../models/portfolio";

const projectsData: PortfolioModel[] = [
    {
        id: 1,
        name: "Keepbay",
        tags: ["mobile-app", "product"],
        media: {
            thumbnail: require("../assets/images/portfolio/keepbay.png"),
        },
    },
    {
        id: 2,
        name: "Capsa",
        tags: ["web-app", "product"],
        media: {
            thumbnail: require("../assets/images/portfolio/capsa.png"),
        },
    },
    {
        id: 3,
        name: "HDA",
        tags: ["web-page"],
        media: {
            thumbnail: require("../assets/images/portfolio/hda.png"),
        },
    },
];

export default projectsData;

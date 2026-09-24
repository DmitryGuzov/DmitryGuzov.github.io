export interface PortfolioModel {
    id: number;
    name: string;
    tags: string[];
    media: MediaModel;
}

export interface MediaModel {
    thumbnail: any;
}

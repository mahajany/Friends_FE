export class Episode {
    _id: string;
    id: number;
    url: string;
    name: string;
    season: number;
    number: number;
    airdate: string;
    airtime: string;
    airstamp: string;
    runtime: number;
    image: Image;
    summary: string;
    _links: string;
};


class Image {

    medium: string;
    original: string;

};

// _links: {
//     self : {
//         href : http://api.tvmaze.com/episodes/40648
//     }
// }
interface sanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

export interface Place extends sanityBody{
    _type: "place";
    title: string;
    blogs: Post[];
    itineraries: Itinerary[];
}


export interface Post extends sanityBody{
    _type: "post";
    title: string;
    postId: string;
    author: string;
    bannerImage: Image;
    body: Block[];
    itineraries: Itinerary[];
}

export interface Itinerary extends sanityBody{
    _type: "itinerary";
    title: string;
    itineraryId: string;
    body: string[];
    blogs: Post[];
}

export interface Amenities extends sanityBody{
    _type: "amenities";
    title: string;
    image: Image;
}

export interface Social extends sanityBody{
    _type: "social";
    title: string;
    url: string;
}

export interface Sectionas extends sanityBody{
    _type: "sections";
    sectionName: string;
    sectionDescription: string;
    sectionImage: Image;
}
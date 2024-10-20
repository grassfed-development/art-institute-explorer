export interface Artwork {
    id: number,
    title: string,
    image_id: [],
    artist_title: string
}

export interface Artist {
    id: number,
    title: string
}

export interface Exhibition {
    id: number,
    title: string
}

export interface Paginate {
    totalItems: number,
    itemsPerPage: number,
    paginate: (number: number) => void
}
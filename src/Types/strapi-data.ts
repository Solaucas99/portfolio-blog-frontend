export interface PostData {
  title: string;
  content: string;
  repo_link: string;
  preview_link: string;
  date: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  images: StrapiEndpointData<StrapiData<StrapiImageData>>;
  post_image: StrapiEndpointData<StrapiData<StrapiImageData>>;
}

export interface CarouselData {
  title: string;
  description: string;
  createdAt: string;
  publishedAt: string;
  updatedAt: string;
  cover: StrapiEndpointData<StrapiData<StrapiImageData>>;
  post: StrapiEndpointData<StrapiData<PostData>>;
}

export interface StrapiImageFormat {
  ext: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  url: string;
  height: number;
  width: number;
  size: number;
}

export interface StrapiImageData {
  alternativeText: string;
  caption: string;
  ext: string;
  hash: string;
  name: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  url: string;
  mime: string;
  height: number;
  size: number;
  width: number;
  createdAt: string;
  updatedAt: string;
  formats: {
    small: StrapiImageFormat;
    medium: StrapiImageFormat;
    large: StrapiImageFormat;
    thumbnail: StrapiImageFormat;
  };
}

export interface StrapiData<T> {
  attributes: T;
  id: number;
}

export interface StrapiEndpointData<U> {
  data: U & U[];
  meta?: {
    pagination: {
      page: number;
      pageCount: number;
      pageSize: number;
      total: number;
    };
  };
}

export interface RequestResponse {
  total: number;
  total_pages: number;
  results: Results[];
}

export interface Results {
  id: string;
  created_at: Date | null;
  updated_at: Date | null;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: UrlsImages;
  links: LinksImages;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any | null;
  topic_submissions: any;
  user: UserImages;
  tags: any[];
}

export interface UrlsImages {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface LinksImages {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface UserImages {
  id: string;
  updated_at: Date;
  username: string;
  name: string | null;
  first_name: string | null;
  last_name: string | null;
  portfolio_url: string | null;
  bio: string;
  location: string;
  links: any;
  profile_image: any;
  instagram_username: string;
  total_collections: number | null;
  total_likes: number | null;
  total_photos: number | null;
  accepted_tos: boolean;
  for_hire: boolean;
  social: any;
}

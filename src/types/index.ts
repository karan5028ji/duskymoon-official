export interface SocialLinks {
  spotify?: string;
  instagram?: string;
  website?: string;
  appleMusic?: string;
  youtube?: string;
}

export interface Artist {
  id: string;
  name: string;
  realName?: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: SocialLinks;
}

export interface Release {
  id: string;
  title: string;
  type: 'Single' | 'EP' | 'Album';
  releaseDate: string;
  coverArt: string;
  artists: string[];
  links: SocialLinks;
}

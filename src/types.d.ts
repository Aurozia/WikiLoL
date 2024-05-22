export interface Champion {
  id: number;
  name: string;
  alias: string;
  slug: string;
  description: string;
  picture: string;
  release_date: string;
  role: Role | undefined;
  type: Type | undefined;
}

export interface Role {
  id: number;
  name: string;
  slug: string;
  picture: string;
}

export interface Type {
  id: number;
  name: string;
  slug: string;
  picture: string;
}

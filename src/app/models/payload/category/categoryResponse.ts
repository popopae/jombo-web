export interface CategoryResponse {
    displayName?: string;
    icon?: string;
    id?: number;
  
    children?: CategoryResponse[];
  }
  
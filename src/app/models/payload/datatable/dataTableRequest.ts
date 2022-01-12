export interface DataTableRequest {
  draw?: number;
  start?: number;
  length?: number;
  sort?: Sorting[];
  search?: DataTableSearch;
  advanceSearch?: AdvanceSearch[];
}

export interface DataTableSearch {
  value?: string;
  regex?: boolean;
}

export interface AdvanceSearch {
  key?: string;
  condition?: string;
  value?: string;
  multiValue?: string[];
}

export interface Sorting {
  sortColumn?: string;
  sortAscending?: string;
}
  
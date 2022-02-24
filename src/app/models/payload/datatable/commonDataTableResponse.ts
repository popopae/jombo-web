export interface CommonDataTableResponse<T> {
    status: Status;
    data: CommonDataTable<T>;
  }
  
  export interface Status {
    code: string;
    description: string;
  }
  
  export interface CommonDataTable<T> {
    pageNumber: number;
    pageSize?: number;
    totalItems?: number;
    totalPages?: number;
    content?: T[];
  }
  
  
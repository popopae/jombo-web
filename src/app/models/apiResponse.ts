export interface ApiResponse {
  status?: Status;
  errorMessage?: string;
  data?: any;
}

interface Status {
  code: string;
  description: string;
}

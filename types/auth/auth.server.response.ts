export interface AuthServerResponse {
    user: string,
    expiresIn: number,
    permissions: string[],
    token: string,
  };
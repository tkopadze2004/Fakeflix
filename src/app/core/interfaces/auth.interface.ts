export interface LoginPayload {
  email: string;
  password: string;
}
export interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  displayName?: string;
  registered?: boolean;
}
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  currentPassword: string;
}

export interface User {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  accessedAt: string;
  email: string;
  emailVerification: boolean;
  labels: string[];
  mfa: boolean;
  name: string;
  passwordUpdate: string;
  phone: string;
  phoneVerification: boolean;
  prefs: Record<string, any>;
  registration: string;
  status: boolean;
  targets: {
    $createdAt: string;
    $id: string;
    $updatedAt: string;
    expired: boolean;
    identifier: string;
    name: string;
    providerId: string | null;
    providerType: string;
    userId: string;
  }[];
}

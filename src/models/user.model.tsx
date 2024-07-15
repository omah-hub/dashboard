
export interface UserModel {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  mda: Mda;
  token: string;
}

export interface Mda {

  email: string;
  phoneNumber: string;
}
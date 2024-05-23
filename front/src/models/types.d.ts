export interface IUSER {
  id_user: number;
  name: string;
  email: string;
  password: string;
  birth_date: string;
  phone_number: string;
  family: number | null;
  nit: string;
  is_admin: boolean;
}

export interface IMESSAGE {
  label: string;
  from: string;
  to: string;
}

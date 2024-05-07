export interface IUSER {
  id_user: number;
  name: string;
  email: string;
  password: string;
  birth_date: string;
  phone_number: string;
  family: number | null;
  nit: string;
}

export interface IMESSAGE {
  label: string;
  from: string;
  to: string;
}

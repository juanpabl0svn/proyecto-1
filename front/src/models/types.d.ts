export interface IUSER {
  id_user: string;
  username: string;
  name: string;
  email: string;
  username: string;
  password: string;
  birth_date: string;
  phone_number: string;
  family: string | null;
  nit: string;
}

export interface IMESSAGE {
  label: string;
  from: string;
  to: string;
}

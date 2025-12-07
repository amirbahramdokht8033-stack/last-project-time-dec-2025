export interface IJD {
    id: string
    Name?: string,
    URL?: string,
    Ratings?: string,
    price: number,
    ingredient?: string
}

export interface Idprop {
  params: Promise<{ id: string }>;
  searchParams: Promise<[]>;
}

export interface Icp {
    children: React.ReactNode;
}
export interface item  {
    id: number,
    qty: number
}

export interface Tcontext  {
    item: item[]
    increase: (id: number) => void
    getitemqty: (id: number) => number
    cartallqty: number
    decrease: (id: number) => void
    remove: (id: number) => void
}
export interface Iditme {
    id: string
}

export interface Ici {
  id: number
  qty: number
}
export interface LoginForm {
  email: string;
  password: string;
}
export interface User {
  client:string
  Name: string;
  quantity: number;
  price: number;
}



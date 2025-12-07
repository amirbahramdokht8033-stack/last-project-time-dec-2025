import { User } from '@/app/types/types';
import Table, { Column } from '@/component/Table'
import React from "react";

const resulet = await fetch("http://localhost:3001/order")
const data1 = await resulet.json() as User[]


const columns: Column<User>[] = [
  { header: "Name", accessor: "Name" },
  { header: "quantity", accessor: "quantity" },
  { header: "price", accessor: "price" },
  { header: "client", accessor: "client" },
];



export default function App() {
  {
    data1.map(item => [{
      client: item.client , name: item.Name, quantity: item.quantity, prise: item.price
    }]
    )
  }
  return (
    <div className="max-w-2xl mx-auto mt-10">


      <Table columns={columns} data={data1} />
    </div>
  );
}

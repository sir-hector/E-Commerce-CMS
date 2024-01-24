"use client";

import { useParams } from "next/navigation";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { date } from "zod";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";

import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[]
}


export const OrderClient: React.FC<OrderClientProps> = ({data}) => {

  return (
    <>
        <Heading
          title={`Orders ${data.length}`}
          description="Menage orders for your store"
        />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products"/>
    </>
  );
};

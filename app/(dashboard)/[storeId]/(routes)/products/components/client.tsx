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

import { ProductColumn, columns } from "./columns";

interface ProductClientProps {
  data: ProductColumn[]
}


export const ProductClient: React.FC<ProductClientProps> = ({data}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products ${date.length}`}
          description="Menage products for your store"
        />
        <Button onClick={()=> router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label"/>
      <Heading title="API" description="Api calls for Products"/>
      <Separator />
      <ApiList entityName="products" enityIdName="productId"/>
    </>
  );
};

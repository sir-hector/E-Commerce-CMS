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

import { ColorsColumns, columns } from "./columns";

interface ColorsClientProps {
  data: ColorsColumns[]
}


export const ColorsClient: React.FC<ColorsClientProps> = ({data}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors ${date.length}`}
          description="Menage colors for your store"
        />
        <Button onClick={()=> router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name"/>
      <Heading title="API" description="Api calls for Colors"/>
      <Separator />
      <ApiList entityName="colors" enityIdName="colorId"/>
    </>
  );
};

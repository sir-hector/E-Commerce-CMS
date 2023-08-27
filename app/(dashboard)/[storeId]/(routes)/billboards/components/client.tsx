"use client";

import { useParams } from "next/navigation";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { date } from "zod";

import { BillboardColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface BillboardClientProps {
  data: BillboardColumn[]
}


export const BillboardClient: React.FC<BillboardClientProps> = ({data}) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards ${date.length}`}
          description="Menage billboards for your store"
        />
        <Button onClick={()=> router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label"/>
    </>
  );
};

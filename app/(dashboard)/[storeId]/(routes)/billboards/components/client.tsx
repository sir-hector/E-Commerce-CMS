"use client";

import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export const BillboardClient = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title="Billboards (0)" description="Menage billboards for your store"/>
        <Button>
            <Plus className="mr-2 h-4 w-4"/>
            Add new
        </Button>
      </div>
      <Separator />
    </>
  );
};

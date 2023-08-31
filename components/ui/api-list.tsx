"use client"

import { useParams } from "next/navigation";

import { useOrigin } from "@/hooks/use-origin";
import { ApiAlert } from "./api-alert";

interface ApiListProps {
    entityName: string;
    enityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({enityIdName, entityName}) => {
    const params = useParams();
    const origin = useOrigin();

    const baseUrl = `${origin}/api/${params.storeId}`

    return (
        <>
            <ApiAlert title="GET" variant="public" description={`${baseUrl}/${entityName}`}/>
            <ApiAlert title="GET" variant="public" description={`${baseUrl}/${entityName}/{${enityIdName}}`}/>
            <ApiAlert title="POST" variant="admin" description={`${baseUrl}/${entityName}`}/>
            <ApiAlert title="PATCH" variant="admin" description={`${baseUrl}/${entityName}/{${enityIdName}}`}/>
            <ApiAlert title="DELETE" variant="admin" description={`${baseUrl}/${entityName}/{${enityIdName}}`}/>
        </>
    )
}
import { RowDataPacket } from "mysql2";
import { Company } from "../company";
import { Type } from "../type";
export interface Hat extends RowDataPacket{
    id: number,
    name: string,
    price: number,
    man: string,
    woman: string,
    company: Company,
    type: Type
}
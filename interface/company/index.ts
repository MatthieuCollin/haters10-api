import { RowDataPacket } from "mysql2";

export interface Company extends RowDataPacket{
    id: number,
    name: string
}
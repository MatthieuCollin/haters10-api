import { RowDataPacket } from "mysql2";

export interface Type extends RowDataPacket{
    id: number,
    name: string
}
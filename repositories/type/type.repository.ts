
import { connection } from "../..";
import { OkPacket } from "mysql2";
import { Type } from "../../interface/type";


interface ITypeRepository{
    retrieveAll():Promise<Type[]>
    retrieveByID(id:string): Promise<Type[]>
    addType(name: string):Promise <Type[]>
    updateType(id: string, name: string):Promise <Type[]>
    deleteType(id: string): Promise<Type[]>
}

class TypeRepository implements ITypeRepository{
    retrieveAll(): Promise<Type[]> {
        return new Promise((resolve, reject)=>{
            let query : string = "SELECT * from types";
            connection.query<Type[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res)
            })
        })
    };

    retrieveByID(id: string): Promise<Type[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `SELECT * from types WHERE types.id = ${id}`;
            connection.query<Type[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    };

    addType(name: string): Promise<Type[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `INSERT INTO types(name) VALUES ('${name}')`;
            connection.query<Type[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }

    updateType(id: string, name: string): Promise<Type[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `UPDATE types SET types.name = '${name}' WHERE types.id = ${id}`
            connection.query<Type[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }

    deleteType(id: string): Promise<Type[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `DELETE FROM types WHERE types.id = ${id}`;
            connection.query<Type[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }
    
}

export default new TypeRepository;
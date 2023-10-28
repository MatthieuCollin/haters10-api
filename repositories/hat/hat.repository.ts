
import { connection } from "../..";
import { OkPacket } from "mysql2";
import { Hat } from "../../interface/hat";


interface IHatRepository{
    retrieveAll():Promise<Hat[]>
    retrieveByID(id:string): Promise<Hat[]>
    retrieveByCompany(id: string): Promise<Hat[]>;
    addHat(name: string, price: number, man: string, woman: string, company: number, type: number ):Promise <Hat[]>
    updateHat(id: string, name: string, price: number, man: string, woman: string, company: number, type: number ):Promise <Hat[]>
    deleteHat(id: string): Promise<Hat[]>
}

class HatRepository implements IHatRepository{
    retrieveAll(): Promise<Hat[]> {
        return new Promise((resolve, reject)=>{
            let query : string = "SELECT * from hats";
            connection.query<Hat[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res)
            })
        })
    };

    retrieveByID(id: string): Promise<Hat[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `SELECT * from hats WHERE hats.id = ${id}`;
            connection.query<Hat[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    };

    retrieveByCompany(id: string): Promise<Hat[]> {
        return new Promise((resolve , reject)=>{
            let query: string = `SELECT * FROM hats WHERE hats.company = ${id}`;
            connection.query<Hat[]>(query, (err,res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    };

    addHat(name: string, price: number, man: string, woman: string, company: number, type: number ): Promise<Hat[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `INSERT INTO hats(name, price, man, woman ${company ? ",company" : ""},type ) VALUES ('${name}', ${price}, '${man}', '${woman}' ${company ? ","+company : ""}, ${type})`;
            connection.query<Hat[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }

    updateHat(id: string, name: string, price: number, man: string, woman: string, company: number, type: number): Promise<Hat[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `UPDATE hats SET hats.name = '${name}', hats.price = ${price}, hats.man = '${man}', hats.woman = '${woman}', ${ company ? `hats.company = ${company},`: ""} hats.type = ${type} WHERE hats.id = ${id}`
            connection.query<Hat[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }

    deleteHat(id: string): Promise<Hat[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `DELETE FROM hats WHERE hats.id = ${id}`;
            connection.query<Hat[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }
    
}

export default new HatRepository;
import { connection } from "../..";
import { OkPacket } from "mysql2";
import { Bag } from "../../interface/bag";


interface IBagRepository{
    retrieveAll():Promise<Bag[]>
    retrieveByID(id:string): Promise<Bag[]>
    retrieveByCompany(id: string): Promise<Bag[]>;
    addBag(name: string, price: number, man: string, woman: string, company: number, type: number ):Promise <Bag[]>
    updateBag(id: string, name: string, price: number, man: string, woman: string, company: number, type: number ):Promise <Bag[]>
    deleteBag(id: string): Promise<Bag[]>
}

class BagRepository implements IBagRepository{
    retrieveAll(): Promise<Bag[]> {
        return new Promise((resolve, reject)=>{
            let query : string = "SELECT * from bags";
            connection.query<Bag[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res)
            })
        })
    };

    retrieveByID(id: string): Promise<Bag[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `SELECT * from bags WHERE bags.id = ${id}`;
            connection.query<Bag[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    };

    retrieveByCompany(id: string): Promise<Bag[]> {
        return new Promise((resolve , reject)=>{
            let query: string = `SELECT * FROM bags WHERE bags.company = ${id}`;
            connection.query<Bag[]>(query, (err,res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    };

    addBag(name: string, price: number, man: string, woman: string, company: number, type: number ): Promise<Bag[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `INSERT INTO bags(name, price, man, woman ${company ? ",company" : ""},type ) VALUES ('${name}', ${price}, '${man}', '${woman}' ${company ? ","+company : ""}, ${type})`;
            connection.query<Bag[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }

    updateBag(id: string, name: string, price: number, man: string, woman: string, company: number, type: number): Promise<Bag[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `UPDATE bags SET bags.name = '${name}', bags.price = ${price}, bags.man = '${man}', bags.woman = '${woman}', ${ company ? `bags.company = ${company},`: ""} bags.type = ${type} WHERE bags.id = ${id}`
            connection.query<Bag[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }

    deleteBag(id: string): Promise<Bag[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `DELETE FROM bags WHERE bags.id = ${id}`;
            connection.query<Bag[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }
    
}

export default new BagRepository;
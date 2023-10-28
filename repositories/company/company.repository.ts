
import { connection } from "../..";
import { OkPacket } from "mysql2";
import { Company } from "../../interface/company";


interface ICompanyRepository{
    retrieveAll():Promise<Company[]>
    retrieveByID(id:string): Promise<Company[]>
    addCompany(name: string):Promise <Company[]>
    updateCompany(id: string, name: string):Promise <Company[]>
    deleteCompany(id: string): Promise<Company[]>
}

class CompanyRepository implements ICompanyRepository{
    retrieveAll(): Promise<Company[]> {
        return new Promise((resolve, reject)=>{
            let query : string = "SELECT * from companies";
            connection.query<Company[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res)
            })
        })
    };

    retrieveByID(id: string): Promise<Company[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `SELECT * from companies WHERE companies.id = ${id}`;
            connection.query<Company[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    };

    addCompany(name: string): Promise<Company[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `INSERT INTO companies(name) VALUES ('${name}')`;
            connection.query<Company[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }

    updateCompany(id: string, name: string): Promise<Company[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `UPDATE companies SET companies.name = '${name}' WHERE companies.id = ${id}`
            connection.query<Company[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }

    deleteCompany(id: string): Promise<Company[]> {
        return new Promise((resolve, reject)=>{
            let query : string = `DELETE FROM companies WHERE companies.id = ${id}`;
            connection.query<Company[]>(query, (err, res)=>{
                if(err) reject (err);
                else resolve(res);
            })
        })
    }
    
}

export default new CompanyRepository;
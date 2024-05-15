import { Negotiation } from "../models/html";
import { Reports } from "./reports";


export class HTMLReport extends Reports<Negotiation[], string> {

    constructor(param: {userName: string, fileName: string, exportPath: string}){
        super(param);
    }

    protected retrieveData(): Promise<Negotiation[]> {
        return this.simulateDataFromDB();
    }

    protected cleanData(data: Negotiation[]): Negotiation[] {
        const res =  this.removeRepeatedData(data);

        /// .... other cleaning methods
        return res;
    }

    protected outputFormat(data: Negotiation[]): string {
        return `
            <!DOCTYPE html>
            <html>
                <head>
                    <title> Sales Report </title>
                </head

                <body>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Process</th>
                                <th>Value</th>
                                <th>Start negotiation date</th>
                                <th>End negotiation date</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.dataToTable(data)}
                        </tbody>
                    </table>
                </body>
            </html>   
        `
    }

    protected exportFile(format: string): void {
        
        console.log("==========================================");
        console.log(`Exporting file: ${this.fileName.toUpperCase()}.html`);
        console.log(`data:`);
        console.log(format);
        console.log("==========================================");

    }

    private async simulateDataFromDB(): Promise<Negotiation[]> {
        return [
            {
                customer: 'Bavaria',
                startNegotiation: new Date("2024-01-01"),
                process: 'COMPLETED',
                negotiationValue: 20000000,
                endNegotiation: new Date("2024-03-05")
            },
            {
                customer: 'Bavaria',
                startNegotiation: new Date("2024-01-01"),
                process: 'COMPLETED',
                negotiationValue: 20000000,
                endNegotiation: new Date("2024-03-05")
            },
            {
                customer: 'Colsubsidio',
                startNegotiation: new Date("2024-01-01"),
                process: 'PENDING',
                negotiationValue: 50000000,
            },
            {
                customer: 'Colanta',
                startNegotiation: new Date("2024-02-24"),
                process: 'CANCELED',
                negotiationValue: 40000000,
                endNegotiation: new Date(),
            }
        ];
    }

    private removeRepeatedData(data: Negotiation[]): Negotiation[] {
        return [...new Set(data)];
    }

    private dataToTable(data: Negotiation[]): string[]{
        return data.map( x => 
            `
            <tr>
                <td>${x.customer}</td>
                <td>${x.process}</td>
                <td>${x.negotiationValue}</td>
                <td>${x.startNegotiation}</td>
                <td>${x.endNegotiation ?? ''}</td>
            </tr>
            `
        );
    }

}
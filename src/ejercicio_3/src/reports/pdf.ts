import { Productivity } from "../models/pdf";
import { Reports } from "./reports";

export class PDFReports extends Reports< Productivity[], string> {

    protected async retrieveData(): Promise<Productivity[]> {
        return this.simulateDataFromAPI();
    }

    protected cleanData(data: Productivity[]): Productivity[] {
        const res = this.getCallsGreaterThan10(data);

        /// .... other cleaning methods
        return res;
    }

    protected outputFormat(data: Productivity[]): string {
        
        return `
            PRODUCTIVITY REPORT

            These are the users who have more than 10 calls made

            ======================================================================
            || UserName  || Completed Calls || incompleted Calls || Total Calls ||
            ======================================================================
            ${this.dataToPDF(data)}
        `;

    }

    protected exportFile(data: string): void {
        console.log("==========================================");
        console.log(`Exporting file: ${this.fileName.toUpperCase()}.pdf`);
        console.log(`data:`);
        console.log(data);
        console.log("==========================================");
    }

    private async simulateDataFromAPI(): Promise<Productivity[]> {

        // The delay of an API is simulated.
        await this.sleep(2000);
        return [
            {
                userName: 'user 1',
                completeCalls: 6,
                incompleteCalls: 0,
                totalCalls: 6
            },
            {
                userName: 'user 2',
                completeCalls: 6,
                incompleteCalls: 9,
                totalCalls: 15
            },
            {
                userName: 'user 3',
                completeCalls: 6,
                incompleteCalls: 9,
                totalCalls: 15
            },
            {
                userName: 'user 4',
                completeCalls: 2,
                incompleteCalls: 9,
                totalCalls: 11
            }
        ];
    }

    private getCallsGreaterThan10(data: Productivity[]){
        return data.filter( x => x.totalCalls > 10 );
    }

    private dataToPDF(data: Productivity[]): string[] {
        return data.map( x => `
            ======================================================================
            || ${x.userName}  || ${x.completeCalls} || ${x.incompleteCalls} || ${x.totalCalls} ||
            ======================================================================
        ` );
    }


    private sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));
}
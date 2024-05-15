import { WebSiteVisites } from "../models/excel";
import { Reports } from "./reports";

export class EXCELReport extends Reports<WebSiteVisites[], string> {


    protected retrieveData(): Promise<WebSiteVisites[]> {
        return this.simulateDataFromLogs();
    }

    protected cleanData(data: WebSiteVisites[]): WebSiteVisites[] {
        // without clean
        return data;
    }

    protected outputFormat(data: WebSiteVisites[]): string {

        return `
            .__________..______________.._____________.._____________________________.
            |   url    ||numberOfVisits||averageClicks||averageDurationTimeInMinutes |
            |__________||______________||_____________||_____________________________|
            ${this.dataToExcel(data)}
        ` 
       
      
    }

    protected exportFile(data: string): void {
        console.log("==========================================");
        console.log(`Exporting file: ${this.fileName.toUpperCase()}.xls`);
        console.log(`data:`);
        console.log(data);
        console.log("==========================================");
    }

    private async simulateDataFromLogs(): Promise<WebSiteVisites[]> {

        return [
            {
                url: 'https://www.unisabana.edu.co/',
                numberOfVisits: 1000000,
                averageClicks: 10000,
                averageDurationTimeInMinutes: 30,
            },
            {
                url: 'https://www.facebook.com/?locale=es_LA',
                numberOfVisits: 1000000000,
                averageClicks: 15124125123,
                averageDurationTimeInMinutes: 180,
            },
            {
                url: 'https://www.linkedin.com/',
                numberOfVisits: 5000000,
                averageClicks: 231034123,
                averageDurationTimeInMinutes: 40,
            }
        ];

    }

    private dataToExcel(data: WebSiteVisites[]): string[]{
        return data.map( x => `
            .__________..______________.._____________.._____________________________.
            |   ${x.url}    ||${x.numberOfVisits}||${x.averageClicks}||${x.averageDurationTimeInMinutes} |
            |__________||______________||_____________||_____________________________|
   ` );
    }

}
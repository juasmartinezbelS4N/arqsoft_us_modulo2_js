export abstract class Reports<T = any, OutputFormat = any> {

    protected userName: string;
    protected fileName: string;
    protected exportPath: string;

    constructor( param: {userName: string, fileName: string, exportPath: string} ){
        this.userName = param.userName;
        this.fileName = param.fileName;
        this.exportPath = param.exportPath;
    }


    public async generateReport(): Promise<void> {
        const uncleanedData = await this.retrieveData();
        const finalData = this.cleanData(uncleanedData);
        const format = this.outputFormat(finalData);
        this.exportFile(format);
        this.generateAuditLog();
    }

    protected abstract retrieveData(): Promise<T>;

    protected abstract cleanData(data: T): T;

    protected abstract outputFormat(data: T): OutputFormat;

    protected abstract exportFile(data: OutputFormat): void;

    private generateAuditLog(): void {
        console.log("==========================================");
        console.log(`User ${this.userName.toUpperCase()} generated a file`);
        console.log(`Filename: ${this.fileName.toUpperCase()}`);
        console.log(`The file was in the following path: ${this.exportPath.toUpperCase()}`);
        console.log("==========================================");
    }

}
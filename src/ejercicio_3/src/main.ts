
import { EXCELReport } from "./reports/excel";
import { HTMLReport } from "./reports/html";
import { PDFReports } from "./reports/pdf";
import { Reports } from "./reports/reports";

/**
 * PDF Report
 */
generateReport(
    new PDFReports({ 
        exportPath: 'C:/Usuarios/User/Descargas', 
        fileName: 'productivity_report', 
        userName: 'Grupo 2 (admin)'
    })
);


/* HTML report */
generateReport(
    new HTMLReport({ 
        exportPath: 'C:/Usuarios/User/Descargas', 
        fileName: 'sales_report', 
        userName: 'Grupo 2'
    })
);

/* HTML report */
generateReport(
    new EXCELReport({ 
        exportPath: 'C:/Usuarios/User/Descargas', 
        fileName: 'website_visites_report', 
        userName: 'Guess'
    })
);


function generateReport(abstractClass: Reports) {
    abstractClass.generateReport();
}

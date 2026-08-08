const PDFDocument = require("pdfkit");

const generatePDF = (validation, res) => {
    const doc = new PDFDocument();

    res.setHeader(
    "Content-Type",
    "application/pdf"
);

res.setHeader(
    "Content-Disposition",
    "attachment; filename=startup-report.pdf"
);

doc.pipe(res);

doc.fontSize(22);

doc.text("Startup Validation Report");
doc.moveDown();

doc.fontSize(18);
doc.text("Idea");

doc.fontSize(12);
doc.text(validation.idea);

doc.moveDown();

doc.fontSize(18);
doc.text("Investor Feedback");

doc.fontSize(12);
doc.text(validation.agents.investor);

doc.moveDown();

doc.fontSize(18);
doc.text("Customer Feedback");

doc.fontSize(12);
doc.text(validation.agents.customer);

doc.moveDown();

doc.fontSize(18);
doc.text("Competitor Feedback");

doc.fontSize(12);
doc.text(validation.agents.competitor);

doc.moveDown();

doc.fontSize(18);
doc.text("Final Verdict");

doc.fontSize(12);
doc.text(validation.verdict);

doc.moveDown();

doc.fontSize(18);
doc.text("3-Month Roadmap");

doc.fontSize(12);
doc.text(validation.roadmap);

doc.end();
};

module.exports = {
    generatePDF
};
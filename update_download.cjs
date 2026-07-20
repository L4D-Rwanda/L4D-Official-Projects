const fs = require('fs');
let content = fs.readFileSync('components/PublicationDetailPage.tsx', 'utf-8');

const targetStr = "  const handleDownloadFile = () => {\n    const textContent = `";
const endStr = "  };";

const startIndex = content.indexOf(targetStr);
const endIndex = content.indexOf(endStr, startIndex) + endStr.length;

const mockPdf = `  const handleDownloadFile = () => {
    // Generate a mock PDF file since documents are only available in PDF format
    const pdfContent = \`%PDF-1.4\\n1 0 obj\\n<< /Type /Catalog /Pages 2 0 R >>\\nendobj\\n2 0 obj\\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\\nendobj\\n3 0 obj\\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> >>\\nendobj\\n4 0 obj\\n<< /Length 53 >>\\nstream\\nBT\\n/F1 24 Tf\\n100 700 Td\\n(Publication Downloaded) Tj\\nET\\nendstream\\nendobj\\nxref\\n0 5\\n0000000000 65535 f \\n0000000009 00000 n \\n0000000058 00000 n \\n0000000115 00000 n \\n0000000288 00000 n \\ntrailer\\n<< /Size 5 /Root 1 0 R >>\\nstartxref\\n390\\n%%EOF\`;
    
    const blob = new Blob([pdfContent], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    // Replace characters that might be invalid in filenames
    link.download = \`\${publication.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf\`;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };`;

const newContent = content.substring(0, startIndex) + mockPdf + content.substring(endIndex);
fs.writeFileSync('components/PublicationDetailPage.tsx', newContent);
console.log("Updated handleDownloadFile");

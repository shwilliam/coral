import jsPDF from 'jspdf'

const usePdfDownload = () => {
  const downloadPdf = (content, filename = 'coral') => {
    const doc = new jsPDF({
      unit: 'px',
      format: 'a4',
    })

    doc.fromHTML(content, 15, 15, {
      width: 400,
    })

    doc.save(`${filename}.pdf`)
  }

  return downloadPdf
}

export default usePdfDownload

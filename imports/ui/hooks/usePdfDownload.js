import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const a4 = [595.28, 841.89]

const usePdfDownload = selector => {
  if (!document) return [{message: 'document is undefined'}, null]

  const downloadPdf = () => {
    const el = document.querySelector(selector)
    createPDF(el)
  }

  const createPDF = (el, filename = 'coral') => {
    getCanvas(el).then(canvas => {
      const img = canvas.toDataURL('image/png')
      const doc = new jsPDF({
        unit: 'px',
        format: 'a4',
      })
      doc.addImage(img, 'JPEG', 20, 20)
      doc.save(`${filename}.pdf`)
    })
  }

  const getCanvas = el => {
    el.style.width = a4[0] * 1.33333 - 80
    el.style.maxWidth = 'none'

    return html2canvas(el, {
      imageTimeout: 2000,
      removeContainer: true,
    })
  }

  return [null, downloadPdf]
}

export default usePdfDownload

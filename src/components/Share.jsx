import React from "react";
import { jsPDF } from 'jspdf';

const Share = () => {
    const handleShare = async () => {
        const shareImg = localStorage.getItem('savedPhoto');
        if (!shareImg) return alert("Error");
    
        const doc = new jsPDF();
        doc.addImage(shareImg, "PNG", 10, 20, 190, 257);
        const pdfBlob = doc.output("blob");
        const file = new File([pdfBlob], "54863568563692301235.pdf", { type: "application/pdf" });
    
        if (navigator.share && navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({
              files: [file]
            });
          } catch (error) {
            console.error("Error", error);
          }
        } else {
          alert("Error");
        }
    };
    return(
        <button className="btn-share" onClick={handleShare}></button>
    )
}

export default Share;
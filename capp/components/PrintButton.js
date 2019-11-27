import React from 'react';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

const pxToMm = (px) => {
  return Math.floor(px/document.getElementById('myMm').offsetHeight);
};

const mmToPx = (mm) => {
  return document.getElementById('myMm').offsetHeight*mm;
};

const range = (start, end) => {
    return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});
};


const PrintButton = ({id, label}) => (<div className="tc mb4 mt2">
  {/*
    Getting pixel height in milimeters:
    https://stackoverflow.com/questions/7650413/pixel-to-mm-equation/27111621#27111621
  */}


  <div
    className="pa2 ba bw1 b--black bg-yellow black-90 br2 dib pointer dim shadow-1"
    onClick={() => {
      var input = document.body;
      html2canvas(input).then(function(canvas){
        document.body.appendChild(canvas);
        var image= canvas.toDataURL('images/jpeg',1.0);
        console.log(image);
        var pdf = new jsPDF();
        pdf.addImage(image,'JPEG',0,0);
        pdf.save();
      })
    }}>
    {label}
  </div>
</div>);

export default PrintButton;
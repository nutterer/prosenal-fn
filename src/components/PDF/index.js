import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PDF() {
    const [ numPage, setNumPage ] = useState(null);
    const [ pageNumber, setPageNumber ] = useState(1);
   
    function onDocumentLoadSuccess({ numPage }){
        setNumPage(numPage);
    }

  return (
      <>
        <Document
            file="Test.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
        >
            <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPage}</p>
      </>
  );
}

export { PDF };

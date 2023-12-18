import React from 'react';
import Navbar from "../../../../Navbar"


const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // 100% of the viewport height
};

const squareContainerStyle = {
  width: '70%',
  maxWidth: '100%',
  height: '60%',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '2%',
  marginTop: '-15vh',
};

const leftSquareStyle = {
  width: '58%',
  height: '90%',
  backgroundColor: 'black',
  padding: '1em',
};

const rightSquareStyle = {
  width: '38%',
  height: '90%',
  backgroundColor: 'white',
  padding: '1em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // Align text and button to the left
  justifyContent: 'flex-start', // Align text and button to the top
};

const left_title_style = {
  fontSize: '18px',
  textAlign: 'left',
  fontWeight: 'bold',
  marginBottom: '0.5em',
  color: 'grey',
};

const left_description_style = {
  fontSize: '12px',
  textAlign: 'left',
  color: 'grey',
};

const right_title_style = {
  fontSize: '18px',
  textAlign: 'left',
  fontWeight: 'bold',
  marginBottom: '0.5em',
  color: 'grey',
};

const buttonStyle = {
  marginTop: '1em',
  borderRadius: '20px',
  border: 'none',
  padding: '10px',
  fontSize: '14px',
  backgroundColor: 'grey',
  color: 'black',
  cursor: 'pointer',
  alignSelf: 'center', // Center the button horizontally

};

const UtilityModel = () => {


  const onButtonClick = (pdfFileName) => {
    fetch(pdfFileName).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let link = document.createElement("a");
        link.href = fileURL;
        link.download = pdfFileName; // Use the provided file name
        link.click();
      });
    });
  };

  return (
  <div>
     <Navbar/>
    <div style={containerStyle}>
   
      <div style={squareContainerStyle}>
        <div style={leftSquareStyle}>
          <div style={left_title_style}>Trademark</div>
          <div style={left_description_style}>
          A trademark is a word, a group of words, sign, symbol, logo or a combination thereof that identifies and differentiates the source of the goods or services of one entity from those of others.
          
          If you’re a business, distinguishing your goods or services from others gives you a competitive edge. Learn more about trademarks, how to apply for protection, and how to manage them
          </div>
        </div>
        <div style={rightSquareStyle}>
          <div style={right_title_style}>Requirements</div>
        
        {/* <button style={buttonStyle} onClick={onButtonClick}>Click Me</button> */}

        <button style={buttonStyle} onClick={() => onButtonClick("CNN-for-Multiclassification_Bagongon.pdf")}>Download PDF 1</button>
        <button style={buttonStyle} onClick={() => onButtonClick("group-1-4.pdf")}>Download PDF 2</button>
        <button style={buttonStyle} onClick={() => onButtonClick("CNN-for-Multiclassification_Bagongon.pdf")}>Download PDF 3</button>
        <button style={buttonStyle} onClick={() => onButtonClick("group-1-4.pdf")}>Download PDF 4</button>  
      
        </div>
      </div>
    </div>
    </div>
  );
};

export default UtilityModel;
import React from 'react';

export default class TemplateBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.props
    };
  }

  render() {
    return (
      <div>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\n      #formcontent2back {\n        size: 7in 9.25in;\n        width: 780px;\n  margin: 27mm 39mm 27mm 39mm;\n        padding: 8px;\n        border: 2px #242323 solid;\n      }\n\n      .print-content {\n        margin-top: 45px;\n      }\n\n      .print-content > div > span {\n        color: #000;\n      }\n\n      .row {\n        display: flex;\n        flex-direction: row;\n        justify-content: justify;\n        margin-bottom: 15px;\n        font-size: 1.1em;\n        font-weight: 600;\n      }\n\n      .row span {\n        font-size: 0.8em;\n        text-transform: uppercase;\n      }\n\n      .print-content > div > span {\n        color: #000;\n      }\n\n      .line,\n      .line1,\n      .line2,\n      .line3,\n      .line4,\n      .line5,\n      .line6,\n      .line7,\n      .line8,\n      .line9 {\n        border-bottom: 1px #0a0a0a solid;\n        text-transform: none;\n        color: #000;\n      }\n\n      .line1 {\n        width: 26%;\n      }\n\n      .line2 {\n        width: 27.5%;\n      }\n\n      .line3 {\n        width: 31%;\n      }\n\n      .line4 {\n        width: 18%;\n      }\n\n      .line5 {\n        width: 21%;\n      }\n\n      .line6 {\n        width: 51%;\n      }\n\n      .line7 {\n        width: 100%;\n      }\n\n      .line8 {\n        width: 25%;\n      }\n\n      .line9 {\n        width: 40%;\n      }\n\n      .heading > span {\n        color: #000;\n      }\n\n      .fifth .col {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n      }\n\n      .fifth .col .line {\n        margin-bottom: 10px;\n      }\n\n      .fifth .col span {\n        margin-bottom: 5px;\n      }\n\n      .third {\n        width: 100%;\n        height: 430px;\n      }\n    '
          }}
        />
        <div id="formcontent2back">
          <div className="print-content" style={{ marginBottom: 40 }}>
            <div className="row">
              <span>ग) द नं </span> <span className="line4" id="dana" />
              <span>मिति</span> <span className="line2" id="miti" />
              <span> को &nbsp; </span>
              <span> गा.वि.स / न.पा वडा.नं </span>
              <span className="line5" id="gawisa" />
            </div>
            <div className="row">
              <span>को मृत्यु दर्ता प्रमाण पत्र ।</span>
            </div>
            <div className="row">
              <span>घ) मालपोत बुझाएको नं</span>
              <span className="line4" id="malpot" />
              <span>मिति </span> <span className="line4" id="miti2" />
              <span>को रसिद ।</span>
            </div>
            <div className="row">
              <span> ङ्) </span> <span className="line4" id="dinko" />
              <span>दिनको सार्वजनिक सूचना प्रकाशन मिति</span>
              <span className="line4" id="miti3" />
            </div>
            <div className="row">
              <span>च) जग्गा धनी दर्ता प्रमाण पुर्जा थान </span>
              <span className="line2" id="purja" />
            </div>
            <div className="row">
              <span>छ) हकदार मध्ये &nbsp;</span>
              <span className="line4" id="hakdar" />
              <span>ले द.नं &nbsp;</span>
              <span className="line4" id="dana" />
              <span>मिति &nbsp; </span> <span className="line4" id="miti4" />
              <span>मा निवेदकको नाममा</span>
            </div>
            <div className="row">
              <span> नामसारी गर्न मन्जुरी गरेको सनाखत ।</span>
            </div>
            <div className="row">
              <u> ज) अन्य (कुनै प्रमाण भए) </u>
            </div>
            <div className="row">
              <span className="line7" id="anya" />
            </div>
            <br />
            <div className="row">
              <span className="line7" />
            </div>
            <br />
            <div className="row">
              <span className="line7" />
            </div>
            <div className="row">
              <span style={{ paddingLeft: 500 }}>मिसिल नं. : </span>
              <span className="line4" id="misil" />
            </div>
            <div className="row">
              <u>झ) मोठ र रोक्काको व्यहोरा:</u>
            </div>
            <div className="row">
              <span className="line7" id="vyahora" />
            </div>
            <br />
            <div className="row">
              <span className="line7" />
            </div>
            <br />
            <div className="row">
              <span className="line7" />
            </div>
            <div className="row">
              <u>ञा) तामेली व्यहोरा:</u>
            </div>
            <div className="row">
              <span className="line7" id="vyahora2" />
            </div>
            <br />
            <div className="row">
              <span className="line7" />
            </div>
            <br />
            <div className="row">
              <span className="line7" />
            </div>
            <div className="row">
              <u>कार्यालयको निर्णय:</u>
            </div>
            <div className="row">
              <span className="line7" id="vyahora3" />
            </div>
            <br />
            <div className="row">
              <span className="line7" />
            </div>
            <br />
            <div className="row">
              <span className="line7" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

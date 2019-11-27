import React from 'react';
import Logo from '../logo.png';
export default class TemplateFront extends React.Component {
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
              '\n        table,\n        th,\n        td {\n            width: 100%;\n            max-width: 100%;\n            margin-bottom: 20px;\n            border: 1px solid black;\n        }\n        #formcontent2 {\n            size: 7in 9.25in;width:692px;\n            height:auto;\n            margin: 27mm 39mm 27mm 39mm;\n            padding:8px;\n            border: 2px #242323 solid;\n        }\n        .print-head {\n            width: 100%;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-evenly;\n            text-transform: uppercase;\n            font-size: 0.9em;\n            font-weight: bold;\n        }\n\n        .print-content {\n            margin-top: 45px;\n        }\n\n        .print-content>div>span {\n            color: #000;\n        }\n\n        .print-row {\n            display: flex;\n            flex-direction: row;\n            justify-content: justify;\n            margin-bottom: 15px;\n            font-size: 1.1em;\n            font-weight: 600;\n        }\n\n        .print-row span {\n            font-size: 0.8em;\n            text-transform: uppercase;\n        }\n\n        .line,\n        .line1,\n        .line2,\n        .line3,\n        .line4,\n        .line5,\n        .line6,\n        .line7,\n        .line8,\n        .line9 {\n            border-bottom: 1px #0a0a0a solid;\n            text-transform: none;\n            color: #000;\n        }\n\n        .line1 {\n            width: 26%;\n        }\n\n        .line2 {\n            width: 27.5%;\n        }\n\n        .line3 {\n            width: 31%;\n        }\n\n        .line4 {\n            width: 18%\n        }\n\n        .line5 {\n            width: 21%;\n        }\n\n        .line6 {\n            width: 19%;\n        }\n\n        .line7 {\n            width: 30%;\n        }\n\n        .line8 {\n            width: 25%;\n        }\n\n        .line9 {\n            width: 40%;\n        }\n\n        .print-heading>span {\n            color: #000;\n        }\n\n        .fifth .col {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n        }\n\n        .fifth .col .line {\n            margin-bottom: 10px;\n        }\n\n        tbody tr td {\n            height: 30px;\n        }\n\n        .fifth .col span {\n            margin-bottom: 5px;\n        }\n\n        .third {\n            width: 100%;\n            height: 430px;\n        }\n\n        th,\n        td {\n            font-size: 0.9em;\n            ;\n        }\n\n        .text-vertical {\n            text-orientation: mixed;\n            writing-mode: vertical-lr;\n        }\n\n        .text-align-left {\n            text-align: left;\n            padding-left: 2px;\n        }\n\n        .text-vertical {\n            text-orientation: mixed;\n            writing-mode: vertical-rl;\n            transform: rotate(180deg);\n            padding-top: 5px;\n            text-align: center;\n            vertical-align: bottom;\n        }\n\n        .text-align-left {\n            text-align: start;\n            padding-left: 0px;\n        }\n\n        .text-center {\n            text-align: center;\n        }\n\n        .print-heading>span {\n            color: #000;\n        }\n\n        .print-content>div>span {\n            color: #000;\n        }\n    '
          }}
        />
        <div
          id="formcontent2"
          style={{
            size: '7in 9.25in',
            width: 780,
            margin: '27mm 39mm 27mm 39mm'
          }}
        >
          <div className="print-head">
            <div>
              <img
                src={Logo}
                style={{ width: 220, height: 110, margin: '0 80px 0 39px' }}
                alt="logo"
                className="col image"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: 120
              }}
              className="col print-heading"
            >
              <span style={{ fontWeight: 'bold' }}>नेपाल सरकार</span>
              <span style={{ fontWeight: 'bold' }}>
                भूमि व्यवस्था सरकारी तथा गरिवी निवारण मन्त्रलय
              </span>
              <span style={{ fontWeight: 'bold' }}>
                भूमि व्यवस्थापन तथा अभिलेख विभाग
              </span>
              <span
                style={{
                  fontSize: '1.8em',
                  fontFamily: 'ArialNarprint-row2',
                  fontWeight: 'bold'
                }}
              >
                मालपोत कार्यालय
              </span>
              <span
                style={{
                  fontSize: '1.4em',
                  fontFamily: 'ArialNarprint-row2',
                  fontWeight: 'bold'
                }}
              >
                साँखु (काठमाण्डौ)
              </span>
              <br />
              <br />
            </div>
          </div>
          <div
            className="date"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <span>
                {' '}
                मिसिल नं.: <span className="line2" id="misil" />
              </span>
            </div>
            <div>
              <span>
                {' '}
                मिति: <span className="line2" id="miti" />
              </span>
            </div>
          </div>
          <div>
            <span
              style={{
                fontSize: '1.1em',
                fontFamily: 'ArialNarprint-row2',
                marginLeft: '-40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 30,
                fontWeight: 'bold'
              }}
            >
              <u> विषय :- नामसारीको टिप्पणी र आदेश</u>{' '}
            </span>
          </div>
          <div
            className="print-content"
            style={{ marginBottom: 40, textAlign: 'justify' }}
          >
            <span style={{ float: 'left' }}>श्रीमान्,</span>
            <span>
              मेरो / हाम्रो नातेदारका नाम मा दर्ता रहेको तपसिलका विवरन अनुसारको
              जग्गा निज परलोक हुनु भएकोले निम्न प्रमानहरुको आधारमा निजको{' '}
            </span>
            <span>
              नामबाट मेरो/हाम्रो नाममा एकलौटी/संयुक्त नामसारी गरी पाउँ भनी द.नं{' '}
            </span>
            <span className="line1" id="dana" />
            <span>मिति</span>
            <span className="line6" id="miti2" />
            <span>मा निवेदन गरेको।</span>
          </div>
          <div className="third">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>निवेदकको नाम, थर, वतन (वारेस भए निजको समेत)</th>
                  <th>नागरिकता नं.</th>
                  <th>पिता </th>
                  <th>पति </th>
                  <th>बाजे </th>
                  <th>कैफियत</th>
                </tr>
              </thead>
              <tbody style={{ height: 40 }}>
                <tr>
                  <td id="naam" />
                  <td className="text-align-left" id="naam2">
                    {' '}
                  </td>
                  <td id="naam3"> </td>
                  <td id="naam4"> </td>
                  <td id="naam5"> </td>
                  <td id="naam6"> </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <span>मृतक दर्तावालाको नाम, थर, वतन </span>
                  </th>
                  <th>
                    <span>जग्गा रहेको गा.वि.स / न.पा </span>
                  </th>
                  <th>वडा नं.</th>
                  <th>
                    <span>कित्ता नं.</span>
                  </th>
                  <th>
                    {' '}
                    <span>क्षत्रफल</span>
                  </th>
                  <th>
                    {' '}
                    <span>मृतकसंगको नाता </span>
                  </th>
                  <th>
                    {' '}
                    <span>मिति </span>
                  </th>
                </tr>
              </thead>
              <tbody style={{ height: 40 }}>
                <tr>
                  <td id="naam7" />
                  <td id="naam8" />
                  <td id="wada" />
                  <td id="kitta"> </td>
                  <td id="chhetrafal"> </td>
                  <td id="nata" />
                  <td id="miti3" />
                </tr>
              </tbody>
            </table>
            <div className="print-row">
              <span>संलग्न प्रमाणहरु :</span>
            </div>
            <div className="print-row">
              <span>क) च .नं. </span> <span className="line4" id="chana" />
              <span> मिति </span> <span className="line4" id="miti4" />
              <span>को न.पा / गा. वि. स.</span>{' '}
              <span className="line1" id="napa" />
              <span>वडा नं </span>
            </div>
            <div className="print-row">
              <span className="line1" id="wada2" />
              <span> को सिफारिस ।</span>
            </div>
            <div className="print-row">
              <span>ख) च .नं. </span> <span className="line4" id="chana2" />
              <span> मिति </span> <span className="line4" id="miti5" />
              <span>को न.पा / गा. वि. स.</span>{' '}
              <span className="line1" id="gawisa" />
              <span>को नाता </span>
            </div>
            <div className="print-row">
              <span>प्रमाणित प्रमाण पत्र ।</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

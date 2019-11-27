import React, { Component } from 'react';
import styles from './Content.css';
import FormsPage from './Form';
import Form3 from './Form3';
import Form1 from './Form1';
import Form2 from './Form2';
import Form10 from './Form10';
import Form9 from './Form9';
import Form8 from './Form8';
import Form7 from './Form7';
import Form6 from './Form6';
import Form5 from './Form5';
import Form4 from './Form4';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.switchvalue = 0;
    this.state = { value: 0, content: <div />,backButton:false ,condition:false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.changeBackButton = this.changeBackButton.bind(this);
  }

  componentDidMount() {
    const { value } = this.state;
    this.setState({
      content: (
        <div className={styles.Drop} data-tid="Drop">
          <form onSubmit={this.handleSubmit}>
            {/* <div className={styles.background} data-tid="background"> */}
            <label htmlFor="value">
              <br />
              <br />
              <br />
              <br />
              <center>
                <b>कृपाया कुन्नै एक छन्नू होला:</b>
              </center>
              <br />
              <br />
              <br />
              <center>
                <select
                  id="value"
                  defaultValue="0"
                  name="value"
                  onChange={this.handleChange}
                >
                  <option value="0"  disabled>विकल्पहरू उपलब्ध</option>
                  <option value="1">परीक्षण जाँचको लागि अन्तिम पत्र </option>
                  <option value="2">दाखिलाको लागि अन्तिम पत्र</option>
                  <option value="3">अदालतको फैसला बमोजिम बाँडफाँड</option>
                  <option value="4">घर कायम</option>
                  <option value="5">जग्गाधनी पुर्जा प्रतिलीपि</option>
                  <option value="6">ट्रायल चेक</option>
                  <option value="7">नामसारी</option>
                  <option value="8">बैँक तथा वित्तीय संस्थाको दाखा नामसारी</option>
                  <option value="9">मोही नामसारी</option>
                  <option value="10">मोही बाँडफाँड</option>
                  <option value="11">सशोधन</option>
                </select>
              </center>
            </label>
            {/* </div> */}
            <br />
            <br />
            <br />
            <br />
            <center><input type="submit" value="फारम बुझाउनुहोस्" /></center> <br />
            <br />
            <br />
            <br />
          </form>
        </div>
      )
    });
  }

  handleChange(event) {
    this.switchvalue = event.target.value;
    this.setState({ [event.target.name]: event.target.value });
  }

  changeBackButton(){
    this.setState({
      backButton:true
    })
  }
  handleBackChange=()=>{
    this.setState({
      condition:true,
      backButton:false
    })
  }
  handleBack() {
    this.setState({
      condition:false
    })
    this.props.handler(false);
  }

  handleSubmit(event) {
    //log.info(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
    // alert('A name was submitted: ' + this.state.value);
    //event.preventDefault();
    this.props.handler(true);
    this.setState({
      condition:true
    })
    event.preventDefault();
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { condition,value,backButton } = this.state;
    //this.props.handler(condition);
    return condition?(
      <div>
        <div style={{position:'absolute',
    left: '50px',
    top: '9px',
    width: '50px',
    height: '50px',
    background: '#e2d7d79e',
    borderRadius: '25px',
    padding: '12px',
    cursor: 'pointer',
    zIndex: '99'}}  onClick={backButton?(this.handleBackChange):(this.handleBack)}>
          <i className={styles.icons} data-tid="icons">arrow_back</i>
      </div> 

      
      {value==='1'?(
        <FormsPage  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='2'?(
        <Form1  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='3'?(
        <Form2  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='4'?(
        <Form3  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='5'?(
        <Form4  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='6'?(
        <Form5  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='7'?(
        <Form6  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='8'?(
        <Form7  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='9'?(
        <Form8  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='10'?(
        <Form9  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):value==='11'?(
        <Form10  backEvent={this.changeBackButton} condition={this.state.condition}/>
      ):(
        <div className={styles.Drop} data-tid="Drop">
        <form onSubmit={this.handleSubmit}>
          {/* <div className={styles.background} data-tid="background"> */}
          <label htmlFor="selector">
            <br />
            <br />
            <br />
            <br />
            <center>
              <b>कृपाया कुन्नै एक छन्नू होला:</b>
            </center>
            <br />
            <br />
            <br />
            {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
            <center>
              <select
                id="selector"
                defaultValue={this.switchvalue}
                name="value"
                onChange={this.handleChange}
              >
             <option  disabled>विकल्पहरू उपलब्ध</option>
              <option value="1">परीक्षण जाँचको लागि अन्तिम पत्र </option>
              <option value="2">दाखिलाको लागि अन्तिम पत्र</option>
              <option value="3">अदालतको-फैसला-बमोजिम-बाँडफाँड</option>
              <option value="4">घर-कायम</option>
              <option value="5">जग्गाधनी-पुर्जा-प्रतिलीपि</option>
              <option value="6">ट्रायल-चेक</option>
              <option value="7">नामसारी</option>
              <option value="8">बैँक-तथा-वित्तीय-संस्थाको-दाखा-नामसारी</option>
              <option value="9">मोही-नामसारी</option>
              <option value="10">मोही-बाँडफाँड</option>
              <option value="11">स_शोधन</option>
              </select>
            </center>
          </label>
          {/* </div> */}
          <br />
          <br />
          <br />
          <br />
          <center><input type="submit" value="फारम बुझाउनुहोस्" /></center> <br />
          <br />
          <br />
          <br />
        </form>
      </div>
  
      )}
    </div>
    ):(
      <div className={styles.Drop} data-tid="Drop">
      <form onSubmit={this.handleSubmit}>
        {/* <div className={styles.background} data-tid="background"> */}
        <label htmlFor="selector">
          <br />
          <br />
          <br />
          <br />
          <center>
            <b>कृपाया कुन्नै एक छन्नू होला:</b>
          </center>
          <br />
          <br />
          <br />
          {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          <center>
            <select
              id="selector"
              defaultValue={this.switchvalue}
              name="value"
              onChange={this.handleChange}
            >
           <option value="0"  disabled>विकल्पहरू उपलब्ध</option>
            <option value="1">परीक्षण जाँचको लागि अन्तिम पत्र </option>
            <option value="2">दाखिलाको लागि अन्तिम पत्र</option>
            <option value="3">अदालतको-फैसला-बमोजिम-बाँडफाँड</option>
            <option value="4">घर-कायम</option>
            <option value="5">जग्गाधनी-पुर्जा-प्रतिलीपि</option>
            <option value="6">ट्रायल-चेक</option>
            <option value="7">नामसारी</option>
            <option value="8">बैँक-तथा-वित्तीय-संस्थाको-दाखा-नामसारी</option>
            <option value="9">मोही-नामसारी</option>
            <option value="10">मोही-बाँडफाँड</option>
            <option value="11">स_शोधन</option>
            </select>
          </center>
        </label>
        {/* </div> */}
        <br />
        <br />
        <br />
        <br />
        <center><input type="submit" value="फारम बुझाउनुहोस्" /></center> <br />
        <br />
        <br />
        <br />
      </form>
    </div>

    );
  }
}

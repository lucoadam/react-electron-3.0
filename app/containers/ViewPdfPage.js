// @flow
import React, { Component } from 'react';
import ViewPdf from '../components/ViewPdf';
import PrintButton from '../components/PrintButton';

type Props = {};

export default class ViewPdfPage extends Component<Props> {
  props: Props;

  render() {
    return(<div>
       <PrintButton id={"singlePage"} label={"Print single page"} />
        <br/>
        <ViewPdf/>
    </div>);
  }
}

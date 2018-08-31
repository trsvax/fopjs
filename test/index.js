import React from "react";
import ReactDomServer from "react-dom/server";

import fo from "../index";

const elementXML = ReactDomServer.renderToStaticMarkup(
  <fo.root>
    <fo.layoutMasterSet>
      <fo.simplePageMaseter
        master-name="content"
        page-width="8.5in"
        page-height="11in"
        margin-top="1in"
        margin-left="1.25in"
        margin-right="1in"
      >
        <fo.regionBody />
      </fo.simplePageMaseter>
    </fo.layoutMasterSet>
    <fo.pageSequence master-reference="content">
      <fo.flow flow-name="xsl-region-body">
        <fo.block>Hello World</fo.block>
      </fo.flow>
    </fo.pageSequence>
  </fo.root>
);

//const doc = ReactDOMServer.renderToString(elementXML);

console.log(elementXML);

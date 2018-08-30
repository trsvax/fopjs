import React from "react";
import ReactDomServer from "react-dom/server";

import fo from "../src/FO";

const elementXML = ReactDomServer.renderToStaticMarkup(
  <fo.root>
    <fo.layoutMasterSet>
      <fo.simplePageMaseter>
        <fo.regionBody />
      </fo.simplePageMaseter>
    </fo.layoutMasterSet>
    <fo.pageSequence>
      <fo.flow />
    </fo.pageSequence>
  </fo.root>
);

//const doc = ReactDOMServer.renderToString(elementXML);

console.log(elementXML);

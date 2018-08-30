import React from "react";

const FO = {
  root: props => React.createElement("fo:root", props),
  layoutMasterSet: props => React.createElement("fo:layout-master-set", props),
  simplePageMaseter: props =>
    React.createElement("fo:simple-page-master", props),
  regionBody: props => React.createElement("fo:region-body", props),
  pageSequence: props => React.createElement("fo:page-sequence", props),
  flow: props => React.createElement("fo:flow", props)
};

export default FO;

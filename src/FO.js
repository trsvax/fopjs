import React from "react";

function e(tag) {
  return props => React.createElement(tag, props);
}

const FO = {
  // Declarations and Pagination and Layout Formatting Object
  root: e("fo:root"),
  declarations: e("fo:declarations"),
  colorProfile: e("fo:color-profile"),
  pageSequence: e("fo:page-sequence"),
  pageSequenceWrapper: e("fo:page-sequence-wrapper"),
  layoutMasterSet: e("fo:layout-master-set"),
  pageSequenceMaster: e("fo:page-sequence-master"),
  singlePageMasterReference: e("fo:single-page-master-reference"),
  repeatablePageMasterAlternatives: e("fo:repeatable-page-master-alternatives"),
  conditionalPageMasterReference: e("fo:contitional-page-master-reference"),
  simplePageMaseter: e("fo:simple-page-master"),
  regionBody: e("fo:region-body"),
  regionBefore: e("fo:region-before"),
  regionAfter: e("fo:region-after"),
  regionStart: e("fo:region-start"),
  regionEnd: e("fo:region-end"),
  flow: e("fo:flow"),
  staticContent: e("fo:static-content"),
  title: e("fo:title"),
  flowMap: e("fo:flow-map"),
  flowAssignment: e("fo:flow-assignment"),
  flowSourceList: e("fo:flow-source-list"),
  flowNameSpecifier: e("fo:flow-name-specifier"),
  flowTargetList: e("fo:flow-target-list"),
  regionNameSpecifier: e("fo:regionNameSpecifier"),
  // Block Formatting Objects
  block: e("fo:block"),
  blockContainer: e("fo:block-container"),
  // Inline Formatting Objects
  bidiOverride: e("fo:bidi-override"),
  character: e("fo:character"),
  initialPropertySet: e("fo:initial-property-set"),
  externalGraphic: e("fo:external-graphic"),
  instreamForeignObject: e("fo:instream-foreign-object"),
  inline: e("fo:inline"),
  inlineContainer: e("fo:inline-container"),
  leader: e("fo:leader"),
  pageNumber: e("fo:page-number"),
  pageNumberCitation: e("fo:page-number-citation"),
  pageNumberCitationLast: e("fo:page-number-citation-last"),
  folloPrefix: e("fo:fello-prefix"),
  folloSuffix: e("fo:follow-suffix"),
  scalingValueCitation: e("fo:scalingValueCitation"),
  // Table Formatting Objects
  tableAndCaption: e("fo:table-and-caption"),
  table: e("fo:table"),
  tableColumn: e("fo:table-column"),
  tableCaption: e("fo:tableCaption"),
  tableHeader: e("fo:table-header"),
  tableFooter: e("fo:table-footer"),
  tableBody: e("fo:table-body"),
  tableRow: e("fo:table-row"),
  tableCell: e("fo:table-cell"),
  // List Formatting Objects
  listBlock: e("fo:list-block"),
  listItem: e("fo:listItem"),
  listItemBody: e("fo:list-item-body"),
  listItemLabel: e("fo:list-item-label"),
  // Link and Multi Formatting Objects
  basicLink: e("fo:basic-link"),
  multiSwitch: e("fo:multi-switch"),
  multiCase: e("fo:multi-case"),
  multiToggle: e("fo:multi-toggle"),
  multiProperties: e("fo:multi-properties"),
  multiPropertySet: e("fo:multi-property-set"),
  // Formatting Object for Indexing
  indexPageNumberPrefix: e("fo:index-page-number-prefix"),
  indexPageNumberSuffix: e("fo:index-page-number-suffix"),
  indexRangeBegin: e("fo:index-range-begin"),
  indexRangeEnd: e("fo:index-range-end"),
  indexKeyReference: e("fo:index-key-reference"),
  indexPageCitationList: e("fo:index-page-citation-list"),
  indexPageCitationListSeparator: e("fo:index-page-citation-list-separator"),
  indexPageCitationRangeSeparator: e("fo:index-page-citation-range-separator"),
  // Formatting Objects for Bookmarks
  bookmarkTree: e("fo:bookmark-tree"),
  bookmark: e("fo:bookmark"),
  bookmarkTitle: e("fo:bookmarkTitle"),
  // Out-of-line Formatting Objects
  float: e("fo:float"),
  footnote: e("fo:footnote"),
  footnoteBody: e("fo:footnoteBody"),
  // Other Formatting Objects
  changeBarBegin: e("fo:changeBarBegin"),
  changeBarEnd: e("fo:change-bar-end"),
  wrapper: e("fo:wrapper"),
  retrieveMarker: e("fo:retrieve-marker"),
  retrieveTableMarker: e("fo:retrieve-table-marker")
};

export default FO;

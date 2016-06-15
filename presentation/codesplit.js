import React from "react";

import {
  CodePane,
  Fill,
  Layout
} from "spectacle";

const CodeSplit = function ({children, source}) {
  return (
    <Layout>
      <Fill style={{paddingRight: "5px"}}>
        <CodePane
          lang="jsx"
          source={source}
        />
      </Fill>
      <Fill style={{paddingLeft: "5px"}}>
        {children}
      </Fill>
    </Layout>
  );
};

export default CodeSplit;

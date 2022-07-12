import { useState, useEffect, useRef } from 'react';
import BlocklyComponent from '../components/Blockly';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.editor}>
      <BlocklyComponent
      // initialXml={`
      // <xml>
      // <block type="component_did_mount">
      // </block>
      // </xml>`}
      />
    </div>
  );
}

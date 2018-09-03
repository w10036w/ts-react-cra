import * as React from 'react';
import { Button, Modal } from 'antd';

const modalHoc = () => {
  return (
    <Modal
      title="basic modal"
      visible={true}
      onOk={() => {
        /** */
      }}
      onCancel={() => {
        /** */
      }}
    >
      <p>contents</p>
      <Button
        type="primary"
        onClick={() => {
          /** */
        }}
      >
        Open
      </Button>
    </Modal>
  )
}

export default modalHoc

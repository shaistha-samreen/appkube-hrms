'use client'
import React, { useState } from 'react';
import { Button, Modal} from 'antd';
import { SendOutlined } from '@ant-design/icons';

 const Popup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}  className='bg-blue-600 rounded-none mt-7' icon={<SendOutlined />}   >
        Manage Invite
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default Popup;
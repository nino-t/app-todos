import React from "react";
import { Modal } from "antd";

const ModalAddNewTodo = ({ onCancel }) => {
  return (
    <Modal open title="Add New Todo" onCancel={onCancel}>
      <p>This is Modal</p>
    </Modal>
  );
};

export default ModalAddNewTodo;

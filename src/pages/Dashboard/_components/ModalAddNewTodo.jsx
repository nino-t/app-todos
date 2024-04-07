import React from "react";
import { Modal } from "antd";
import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  background-color: #fff;
  outline: none;
  border: 0;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: blue;
  border: 0;
  color: #fff;
`;

const ModalAddNewTodo = ({ onCancel }) => {

  const handsubmit = (e) => {

  }

  return (
    <Modal open title="Add New Todo" onCancel={onCancel}>
      <form onSubmit={handsubmit}>
        <Input type="text" placeholder="what your message" />
        <Button type="submit">Kirim</Button>
      </form>
    </Modal>
  );
};

export default ModalAddNewTodo;

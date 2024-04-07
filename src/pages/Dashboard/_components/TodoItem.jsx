/* eslint-disable react/prop-types */
import styled from "styled-components";
import UIText from "../../../components/atoms/ui-text";
import UIButton from "../../../components/atoms/ui-button";
import UIFlexbox from "../../../components/atoms/ui-flexbox/ui-flexbox";
import { useCallback } from "react";

const Wrapper = styled.div`
  margin: 12px 0px;
  .box-message {
    width: 100%;
    border: 1px solid #ccc;
  }
`;

const TodoItem = ({ id, message }) => {
  const handleClickEdit = useCallback(() => {}, []);

  const handleClickDelete = useCallback(() => {}, []);

  return (
    <Wrapper>
      <UIFlexbox>
        <div className="box-message">
          <UIText>{message}</UIText>
        </div>
        <UIFlexbox>
          <UIButton variant="secondary" onClick={handleClickEdit}>
            Edit
          </UIButton>
          <UIButton variant="danger" onClick={handleClickDelete}>
            Delete
          </UIButton>
        </UIFlexbox>
      </UIFlexbox>
    </Wrapper>
  );
};

export default TodoItem;

/* eslint-disable react/prop-types */

const UIFlexbox = ({ children, direction, justify, align }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};

export default UIFlexbox;

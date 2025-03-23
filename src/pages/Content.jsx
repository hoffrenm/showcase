const Content = (props) => {
  return (
    <div className="flex h-screen overflow-auto justify-center">
      {props.children}
    </div>
  );
};

export default Content;

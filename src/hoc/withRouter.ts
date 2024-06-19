import { useNavigate, useParams } from "react-router-dom";

const withRouter = (OriginalComponent: React.ComponentState) => {
  const ComponentWithRouter = (props: Object) => {
    const navigate = useNavigate();
    const params = useParams();
    return <OriginalComponent {...props} navigate={navigate} params={params} />;
  };
  return ComponentWithRouter;
};

export default withRouter;

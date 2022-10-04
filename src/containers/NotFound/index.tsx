import { NotFoundContainer, Title } from "./styles";
import { NotFoundIcon } from "./icons";
import Button from "@designs/Button";
import { useRedirect } from "@hooks/useRedirect";
import { PATH } from "@routes";
interface INotFoundProps {}

const NotFound: React.FC<INotFoundProps> = props => {
  const redirect = useRedirect();
  const onHandleClick = () => {
    redirect(PATH.HOME);
  };
  return (
    <NotFoundContainer className="wrapper">
      <div className="container">
        <div className="flex flex-col items-center gap-2">
          <NotFoundIcon className="max-w-45" />
          <Title>This page can’t be not found</Title>
          <Button variant="secondary" onClick={onHandleClick}>
            Back to homepage
          </Button>
        </div>
      </div>
    </NotFoundContainer>
  );
};

export default NotFound;

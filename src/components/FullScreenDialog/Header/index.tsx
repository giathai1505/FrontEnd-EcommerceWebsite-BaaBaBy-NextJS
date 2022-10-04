import { HeaderContainer, Title, Progress } from "./styles";
import IconButton from "@designs/IconButton";

type IProgress = {
  name: string;
};

type IHeaderProps = {
  title: string;
  onClose: () => void;
  className?: string;
} & (
  | {
      progresses: IProgress[]; // count from 1
      currentStep: string; // count from 1
      onChangeProgress: (step: number) => void;
    }
  | {
      readonly progresses?: undefined;
      readonly currentStep?: undefined;
      readonly onChangeProgress?: undefined;
    }
);

const FSDHeader: React.FC<IHeaderProps> = props => {
  const {
    title,
    className = "",
    progresses,
    currentStep,
    onClose,
    onChangeProgress,
  } = props;

  return (
    <HeaderContainer className={className}>
      <Title>{title}</Title>
      {progresses && (
        <Progress.Container>
          {progresses.map(({ name }, index) => (
            <Progress.Item key={name}>
              <Progress.StepIndex>{index + 1}</Progress.StepIndex>
              {name}
            </Progress.Item>
          ))}
        </Progress.Container>
      )}
      <IconButton tooltip="Close" onClick={() => onClose()}>
        <CloseIcon />
      </IconButton>
    </HeaderContainer>
  );
};

export default FSDHeader;

const CloseIcon: React.FC<{}> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-2.5 w-2.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

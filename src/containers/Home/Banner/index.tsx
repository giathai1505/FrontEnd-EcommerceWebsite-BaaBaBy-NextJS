import RightArrowIcon from "@icons/arrow/RightArrow";
import Button from "@designs/Button";
import { BannerContainer, BannerContent, Heading, Paragraph } from "./styles";

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerContent>
        <Heading>Lựa chọn tối ưu của mẹ và bé</Heading>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Paragraph>
        <Button rightIcon={<RightArrowIcon />}>
          <span className="px-0.5">Bắt đầu</span>
        </Button>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;

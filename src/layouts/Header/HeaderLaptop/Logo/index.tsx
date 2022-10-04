import Link from "next/link";
import { LogoContainer, Image } from "./styles";
interface ILogoProps {}

const Logo: React.FC<ILogoProps> = props => {
  return (
    <LogoContainer>
      <Link href="/">
        <a>
          <Image src="/ingredient/logo/logo.png" />
        </a>
      </Link>
    </LogoContainer>
  );
};

export default Logo;

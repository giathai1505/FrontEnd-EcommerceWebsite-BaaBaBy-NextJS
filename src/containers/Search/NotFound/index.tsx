import SearchIcon from "@icons/Search";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { ButtonSearch, InputController, InputStyled, Title } from "./styles";
import { HeroBox, NotFoundContainer } from "./styles";

interface INotFoundProps {}

const NotFound: React.FC<INotFoundProps> = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    router.push(`/search?q=${searchText}`);
  };

  return (
    <NotFoundContainer>
      <HeroBox>
        <Title>Không tìm thấy sản phẩm... Vui lòng thử lại</Title>
        <InputController>
          <InputStyled
            onChange={handleSearchChange}
            type="text"
            spellCheck={false}
            placeholder="Tìm kiếm sản phẩm"
            value={searchText}
          />
          <ButtonSearch onClick={handleSearch}>
            <SearchIcon color="white" />
          </ButtonSearch>
        </InputController>
      </HeroBox>
    </NotFoundContainer>
  );
};

export default NotFound;

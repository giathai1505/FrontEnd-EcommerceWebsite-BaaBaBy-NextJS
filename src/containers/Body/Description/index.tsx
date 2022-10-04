import Image from "next/image";
import React from "react";
import {
  DescBody,
  DescContent,
  DescHeader,
  DescHeader1,
  DescImg,
  DescWrap,
  DesPara,
} from "./styles";
import desc from "public/ingredient/images/desc.png";
import SectionTitle from "@components/SectionHeader";

const ProductDesc = () => {
  return (
    <DescWrap>
      <SectionTitle name="Chi tiết sản phẩm" />
      <DescBody>
        <DescContent>
          <DescHeader>Đặc điểm sản phẩm:</DescHeader>
          <DesPara>
            - Bé hãy cùng với mẹ hoặc các bạn tạo ra những chiếc bánh pizza thật
            hấp dẫn với nhiều hình trang trí thật dễ thương và ngộ nghĩnh. Bộ
            sản phẩm không chỉ đơn giản là món đồ chơi cho trẻ nhỏ, thông qua
            việc tạo hình bột nặn sẽ giúp bé xây dựng được về cách phối màu, tạo
            hình đồ vật, sự vật… <br />- Bột thơm mùi bánh
            <br /> - Bột mềm dẻo, dễ tạo hình, và khi tạo hình không bị rời ra
            như đất sét.
            <br /> - Sau khi chơi xong, bé không cần rửa tay cũng vẫn sạch,
            không bị bê bết vào móng tay và cũng không bị rít, các bé chỉ cần
            rửa qua với nước là được, vì nó chỉ như bánh, lại rất thơm.
            <br /> - Bé có thể phối các màu, tạo hình nhân vật theo ý thích, sự
            sáng tạo của mình. Qua đó giúp phát triển tư duy của bé.
            <br /> Hướng dẫn sử dụng: Chơi và trưng bày Hưỡng dẫn bảo quản: Để
            chỗ thoáng mát, khô ráo
          </DesPara>
          <DescHeader1>Thông tin sản phẩm:</DescHeader1>
          <DesPara>
            Tên sản phẩm: Bộ đồ chơi đất nặn lò nướng bánh Pizza Play Doh -
            E4576 Xuất xứ: Trung Quốc <br />
            Tên, địa chỉ nhà sản xuất: Guangzhou Yijia Supply Chain Co., Ltd,
            Shop A08, RM372, No 369, West Huangpu Avenue, Tianhe District,
            Guangzhou, Trung Quốc <br />
            Lưu ý: Không thích hợp cho trẻ dưới 3 tuối - có chi tiết nhỏ <br />
          </DesPara>
        </DescContent>
        <DescImg>
          <Image src={desc} />
        </DescImg>
      </DescBody>
    </DescWrap>
  );
};

export default ProductDesc;

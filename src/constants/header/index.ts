import { PATH } from "@routes";

export type IMenuItem = {
  id: string;
  name: string;
  path: string;
  subMenu?: IMenuItem[];
};

export const listMenuHeaders: IMenuItem[] = [
  {
    id: "2",
    name: "Đồng giá",
    path: PATH.DONGGIA,
    subMenu: [
      {
        id: "2.1",
        name: "Dưới 129",
        path: PATH.DUOI129K,
      },
      {
        id: "2.2",
        name: "Dưới 219",
        path: PATH.DUOI219K,
      },
      {
        id: "2.3",
        name: "Lẻ size",
        path: PATH.LESIZE,
      },
    ],
  },
  {
    id: "3",
    name: "Đồ bộ cao cấp",
    path: PATH.DOBOCAOCAP,
  },
  {
    id: "4",
    name: "Sơ sinh",
    path: PATH.SOSINH,
  },
  {
    id: "5",
    name: "Bé gái",
    path: PATH.BEGAI,
    subMenu: [
      {
        id: "4.1",
        name: "Sơ sinh bé gái",
        path: PATH.SOSINHBEGAI,
        subMenu: [
          { id: "4.1.1", name: "Bodysuit Bé Gái", path: PATH.BODYSUITBEGAI },
          { id: "4.1.2", name: "Romper Bé Gái", path: PATH.ROMPERBEGAI },
          { id: "4.1.3", name: "Đồ kiểu Bé Gái", path: PATH.DOKIEUBEGAI },
          {
            id: "4.1.4",
            name: "Áo khoác sơ sinh Bé Gái",
            path: PATH.AOKHOACSOSINHBEGAI,
          },
        ],
      },
      {
        id: "4.2",
        name: "Sơ sinh bé trai",
        path: PATH.SOSINHBETRAI,
        subMenu: [
          { id: "4.2.1", name: "Bodysuit Bé Trai", path: PATH.BODYSUITBETRAI },
          { id: "4.2.2", name: "Romper Bé Trai", path: PATH.ROMPERBETRAI },
          { id: "4.2.3", name: "Đồ kiểu Bé Trai", path: PATH.DOKIEUBETRAI },
          {
            id: "4.2.4",
            name: "Áo khoác sơ sinh Bé Trai",
            path: PATH.AOKHOACSOSINHBETRAI,
          },
          { id: "4.2.5", name: "Bodysuit Organic", path: PATH.BODYSUITORGANIC },
        ],
      },
    ],
  },
  {
    id: "6",
    name: "Bé trai",
    path: PATH.BETRAI,
    subMenu: [
      {
        id: "6.1",
        name: "Sơ sinh bé gái",
        path: PATH.SOSINHBEGAI,
        subMenu: [
          { id: "6.1.1", name: "Bodysuit Bé Gái", path: PATH.BODYSUITBEGAI },
          { id: "6.1.2", name: "Romper Bé Gái", path: PATH.ROMPERBEGAI },
          { id: "6.1.3", name: "Đồ kiểu Bé Gái", path: PATH.DOKIEUBEGAI },
          {
            id: "6.1.4",
            name: "Áo khoác sơ sinh Bé Gái",
            path: PATH.AOKHOACSOSINHBEGAI,
          },
        ],
      },
      {
        id: "6.2",
        name: "Sơ sinh bé trai",
        path: PATH.SOSINHBETRAI,
        subMenu: [
          { id: "6.2.1", name: "Bodysuit Bé Trai", path: PATH.BODYSUITBETRAI },
          { id: "6.2.2", name: "Romper Bé Trai", path: PATH.ROMPERBETRAI },
          { id: "6.2.3", name: "Đồ kiểu Bé Trai", path: PATH.DOKIEUBETRAI },
          {
            id: "6.2.4",
            name: "Áo khoác sơ sinh Bé Trai",
            path: PATH.AOKHOACSOSINHBETRAI,
          },
          { id: "6.2.5", name: "Bodysuit Organic", path: PATH.BODYSUITORGANIC },
        ],
      },
    ],
  },
  {
    id: "7",
    name: "Phụ kiện",
    path: PATH.PHUKIEN,
  },
  {
    id: "8",
    name: "Khuyến mãi",
    path: PATH.KHUYENMAI,
  },
  {
    id: "9",
    name: "Blog",
    path: PATH.BLOG,
  },
];

export const HEADER = {
  HEIGHT_FULL: 137,
  HEIGHT_MOBILE: 70,
};

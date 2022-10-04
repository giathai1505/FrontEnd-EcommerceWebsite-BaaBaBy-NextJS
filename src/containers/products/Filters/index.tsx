import Select from "@designs/Select";
import { Form, Formik } from "formik";
import React from "react";
import {
  FilterItem,
  FilterItemHeader,
  FilterListPrice,
  FilterPriceButton,
  FilterPriceInput,
  FilterPriceItem,
  FilterPriceLabel,
  FilterPriceWrap,
  FilterWrap,
} from "./styles";
import * as Yup from "yup";
import Input from "@designs/Input";

const validationSchema = Yup.object().shape({});

const Filter = () => {
  return (
    <FilterWrap>
      <FilterItem>
        <FilterItemHeader>Lọc sản phẩm theo</FilterItemHeader>
        <Formik
          enableReinitialize
          initialValues={{ filter: [] }}
          validationSchema={validationSchema}
          onSubmit={value => {
            console.log(value);
          }}
        >
          <Form>
            <Select
              name="filter"
              options={[
                { id: 1, name: "Bán chạy" },
                { id: 2, name: "Giá cao" },
              ]}
              onSelect={() => {}}
            ></Select>
          </Form>
        </Formik>
      </FilterItem>
      <FilterItem>
        <FilterItemHeader>Giá</FilterItemHeader>
        <FilterListPrice>
          <FilterPriceItem>Dưới 50.000đ</FilterPriceItem>
          <FilterPriceItem>Từ 50.000đ đến 100.000đ</FilterPriceItem>
          <FilterPriceItem>Từ 100.000đ đến 150.000đ</FilterPriceItem>
          <FilterPriceItem>Từ 150.000đ đến 200.000đ</FilterPriceItem>
          <FilterPriceItem>Trên 200.000đ</FilterPriceItem>
        </FilterListPrice>
        <FilterPriceLabel>Chọn khoảng giá</FilterPriceLabel>
        <Formik
          enableReinitialize
          initialValues={{ filter: [] }}
          validationSchema={validationSchema}
          onSubmit={value => {
            console.log(value);
          }}
        >
          <Form>
            <FilterPriceWrap>
              <Input name="from" label="Từ" />
              -
              <Input name="to" label="Tới" />
            </FilterPriceWrap>
          </Form>
        </Formik>
        <FilterPriceButton>Áp dụng</FilterPriceButton>
      </FilterItem>
    </FilterWrap>
  );
};

export default Filter;

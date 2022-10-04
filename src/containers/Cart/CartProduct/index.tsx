import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { TrashIcon } from "./images";
import {
  CartBody,
  CartCheckbox,
  CartImage,
  CartInput,
  CartItem,
  CartProductWrap,
  ChangeQuantityWrap,
  MinusQuantity,
  NumQuantity,
  PlusQuantity,
  ProductImg,
  ProductName,
  ProductPrice,
  ProductSum,
  ProductWrap,
  Table,
  TableCell,
  TableHeader,
  TableRow,
} from "./styles";

import { BsTrash } from "react-icons/bs";
import apiService from "@services";
import {
  DeleteItemCartArgs,
  LineItem,
  UpdateItemCartArgs,
} from "src/apiCaller";
import { toast } from "react-toastify";
import { useCart } from "@hooks/useCart";
import { ICartItem } from "@typings";

interface ICarProduct {}

const CartProduct: React.FC<ICarProduct> = () => {
  const checkAllRef = useRef<HTMLInputElement>(null);

  const { cartItems } = useCart();

  const [listCart, setListCart] = useState<ICartItem[]>(cartItems);

  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  //action on cartitem
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
  });

  const inCreaseQuantity = (id: string) => {
    //update state
    let newQuantity = 0;
    let newList = listCart.map((item, index) => {
      if (item.product._id === id) {
        console.log(item.product.quantity);
        newQuantity = item.quantity + 1;
        if (item.product.quantity === newQuantity) {
          toast.warning(
            "Số lượng được mua tối đa của sản phẩm này là " + newQuantity,
          );
          return item;
        }
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    //call api update server
    try {
      const variable: UpdateItemCartArgs = {
        input: {
          productId: id,
          quantity: newQuantity,
        },
      };
      const data = apiService
        .updateItemCart()
        .$args(variable)
        .$fetch();
    } catch (error) {
      console.log(error);
    }

    setListCart(newList);
  };

  const deCreaseQuantity = id => {
    let newQuantity: number = 0;

    let newList = listCart.map((item, index) => {
      if (item.product._id === id && item.quantity > 1) {
        newQuantity = item.quantity - 1;
        try {
          const variable: UpdateItemCartArgs = {
            input: {
              productId: id,
              quantity: newQuantity,
            },
          };
          const data = apiService
            .updateItemCart()
            .$args(variable)
            .$fetch();
        } catch (error) {
          console.log(error);
        }

        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setListCart(newList);
  };

  const deleteCartItem = id => {
    let newList = listCart.filter((item, index) => item.product._id != id);
    setListCart(newList);

    const variable: DeleteItemCartArgs = {
      products: [id],
    };
    cart.deleteItemsFromCart(variable);
  };

  const handleChangeCheckBoxAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    let newlist: ICartItem[] = listCart.map(item => {
      return { ...item, checked: checked };
    });
    setListCart(newlist);
  };

  const handleOnChange = (id: string) => {
    let count: number = 0;
    let newlist: ICartItem[] = listCart.map(item => {
      if (item.product._id === id) {
        let currentState = !!item.checked;
        if (item.checked === true) {
          checkAllRef.current.checked = false;
        }
        return { ...item, checked: !currentState };
      }
      return item;
    });
    newlist.forEach(item => {
      item.checked === true ? count++ : count;
    });
    count === listCart.length ? (checkAllRef.current.checked = true) : "";

    setListCart(newlist);
  };

  const handleDeleteMultipleCartItem = () => {
    let newListCart: ICartItem[] = listCart.filter(
      item => item.checked !== true,
    );
    let listDeleteItem: ICartItem[] = listCart.filter(
      item => item.checked === true,
    );
    let listDeleteId: string[] = listDeleteItem.map(item => item.product._id);

    const variable: DeleteItemCartArgs = {
      products: listDeleteId,
    };

    cart.deleteItemsFromCart(variable);

    setListCart(newListCart);
  };

  return (
    <CartProductWrap>
      <Formik
        initialValues={{
          toggle: [],
          hello: [],
        }}
        onSubmit={async values => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            {isMobile ? (
              <>
                {listCart.map((item, index) => {
                  if (!!item) return <></>;
                  return (
                    <CartItem>
                      <CartCheckbox>
                        <CartInput
                          type="checkbox"
                          checked={item?.checked}
                          onChange={() => handleOnChange(item?.product._id)}
                        />
                      </CartCheckbox>

                      <CartImage>
                        <ProductImg
                          width={100}
                          height={100}
                          src={item?.product.imgUrl[0]}
                        />
                      </CartImage>
                      <CartBody.CartBodyContainer>
                        <CartBody.ProductName>
                          {item.product.name}
                        </CartBody.ProductName>
                        <CartBody.ProductQuantity>
                          <ChangeQuantityWrap>
                            <MinusQuantity
                              onClick={() => deCreaseQuantity(item.product._id)}
                            >
                              -
                            </MinusQuantity>
                            <NumQuantity>{item?.quantity}</NumQuantity>
                            <PlusQuantity
                              onClick={() => inCreaseQuantity(item.product._id)}
                            >
                              +
                            </PlusQuantity>
                          </ChangeQuantityWrap>
                        </CartBody.ProductQuantity>
                        <CartBody.ProductMoney>
                          đ
                          {formatter.format(
                            item?.product.price * item.quantity,
                          )}
                        </CartBody.ProductMoney>
                      </CartBody.CartBodyContainer>
                    </CartItem>
                  );
                })}
              </>
            ) : (
              <Table>
                <TableRow>
                  <TableHeader>
                    <CartInput
                      type="checkbox"
                      ref={checkAllRef}
                      id="checkall-cart"
                      onChange={e => handleChangeCheckBoxAll(e)}
                    />
                  </TableHeader>
                  <TableHeader>Sản phẩm</TableHeader>
                  <TableHeader>Đơn giá</TableHeader>
                  <TableHeader>Số lượng</TableHeader>
                  <TableHeader>Số tiền</TableHeader>
                  <TableHeader style={{ width: "100px" }}>
                    {listCart.some(item => item?.checked === true)
                      ? ""
                      : "Thao tác"}

                    <BsTrash
                      style={{
                        width: "20px",
                        cursor: "pointer",
                        textAlign: "center",
                        marginLeft: "20px",
                        display: listCart.some(item => item?.checked === true)
                          ? ""
                          : "none",
                      }}
                      onClick={handleDeleteMultipleCartItem}
                    />
                  </TableHeader>
                </TableRow>

                {listCart.map((item, index) => {
                  if (!item) return <></>;
                  return (
                    <TableRow key={index}>
                      <TableHeader>
                        <CartInput
                          type="checkbox"
                          className="checkboxCartItem"
                          checked={item.checked}
                          onChange={() => handleOnChange(item.product._id)}
                        />
                      </TableHeader>
                      <TableCell>
                        <ProductWrap>
                          <ProductImg
                            width={100}
                            height={100}
                            src={item?.product?.imgUrl[0]}
                          />
                          <ProductName>{item?.product.name}</ProductName>
                        </ProductWrap>
                      </TableCell>
                      <TableCell className="text-primary">
                        <ProductPrice>
                          đ {formatter.format(Math.round(item?.product.price))}
                        </ProductPrice>
                      </TableCell>
                      <TableCell>
                        <ChangeQuantityWrap>
                          <MinusQuantity
                            type="button"
                            onClick={() => deCreaseQuantity(item.product._id)}
                          >
                            -
                          </MinusQuantity>
                          <NumQuantity>{item?.quantity}</NumQuantity>
                          <PlusQuantity
                            type="button"
                            onClick={() => inCreaseQuantity(item.product._id)}
                          >
                            +
                          </PlusQuantity>
                        </ChangeQuantityWrap>
                      </TableCell>
                      <TableCell className="min-w-[140px]">
                        <ProductSum>
                          đ{" "}
                          {formatter.format(
                            Math.round(item.product.price * item.quantity),
                          )}
                        </ProductSum>
                      </TableCell>
                      <TableCell
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={() => deleteCartItem(item.product._id)}
                      >
                        <TrashIcon w="20" h="20" />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </Table>
            )}
          </Form>
        )}
      </Formik>
    </CartProductWrap>
  );
};

export default CartProduct;

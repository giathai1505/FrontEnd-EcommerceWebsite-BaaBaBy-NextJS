import apiService from "@services";
import { ICartItem } from "@typings";
import EventEmitter from "events";
import { toast } from "react-toastify";
import {
  AddItemToCartArgs,
  DeleteItemCartArgs,
  UpdateItemCartArgs,
} from "src/apiCaller";

const cartEvent = new EventEmitter();

export class Cart {
  UPDATE_CART_EVENT = "UPDATE_CART";
  private cartItems: ICartItem[] = [];

  constructor() {
    this.getCartFromAPI();
  }

  public getCartItems() {
    return this.cartItems;
  }

  public getTotal() {
    return this.cartItems.length;
  }

  private setCart(cartItems: ICartItem[]) {
    this.cartItems = cartItems;
    cartEvent.emit(this.UPDATE_CART_EVENT);
  }

  onUpdate(cb: () => void) {
    cartEvent.on(this.UPDATE_CART_EVENT, cb);
  }

  async getCartFromAPI() {
    try {
      const listCart = await apiService
        .getListItemCart([
          "quantity",
          "totalPrice",
          { product: ["name", "imgUrl", "price", "_id", "quantity"] },
        ])
        .$fetch();
      this.setCart(listCart);
    } catch (error) {
      console.error(error);
    }
  }

  async addCartByAPI(variable: AddItemToCartArgs) {
    try {
      const isAddCuccess = await apiService
        .addItemToCart()
        .$args(variable)
        .$fetch();
      toast.success("Thêm vào giỏ hàng thành công !");
      await this.getCartFromAPI();
    } catch (error) {
      toast.error("Thêm vào giỏ hàng thất bại thành công !");

      console.error(error);
    }
  }

  async deleteItemsFromCart(variable: DeleteItemCartArgs) {
    try {
      const data = await apiService
        .deleteItemCart()
        .$args(variable)
        .$fetch();
      await this.getCartFromAPI();
    } catch (error) {
      console.error(error);
    }
  }

  async updateCartItem(variable: UpdateItemCartArgs) {
    try {
      const data = await apiService
        .updateItemCart()
        .$args(variable)
        .$fetch();
      await this.getCartFromAPI();
    } catch (error) {
      console.error(error);
    }
  }
}

globalThis.cart = new Cart();

export {};

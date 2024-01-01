/** 3. 장바구니 기능
 * 질문: "장바구니 기능을 구현하려고 합니다. 타입스크립트로 장바구니에 상품을 추가하고, 삭제하는 기능을 어떻게 만들 수 있을까요? 
 * 장바구니에는 상품의 ID와 수량 정보가 필요해요. 장바구니에 있는 상품의 총 가격을 계산하는 메서드도 추가해주세요."
*/

// 상품 클래스 정의
class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

// 장바구니 아이템 클래스 정의
class CartItem {
  constructor(public product: Product, public quantity: number) {}
}

// 장바구니 클래스 정의
class ShoppingCart {
  private items: CartItem[] = []; // 장바구니 아이템을 저장할 배열

  // 상품 추가
  addItem(product: Product, quantity: number): void {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity; // 기존 상품이 이미 장바구니에 있는 경우 수량 추가
    } else {
      this.items.push(new CartItem(product, quantity)); // 새로운 상품을 장바구니에 추가
    }
  }

  // 상품 삭제
  removeItem(productId: number): void {
    const index = this.items.findIndex(item => item.product.id === productId);
    if (index !== -1) {
      this.items.splice(index, 1); // 해당 상품을 장바구니에서 삭제
    }
  }

  // 총 가격 계산
  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  // 장바구니 내역 조회
  getCartItems(): CartItem[] {
    return this.items;
  }
}

// 사용 예시
const product1 = new Product(1, '사과', 1000);
const product2 = new Product(2, '바나나', 1500);

const cart = new ShoppingCart();

// 상품 추가
cart.addItem(product1, 2);
cart.addItem(product2, 3);

// 총 가격 출력
console.log(`총 가격: ${cart.getTotalPrice()}원`);

// 장바구니 내역 조회
console.log('--- 장바구니 내역 ---');
const cartItems = cart.getCartItems();
cartItems.forEach((item, index) => {
  console.log(`${index + 1}. 상품명: ${item.product.name}, 수량: ${item.quantity}, 가격: ${item.product.price * item.quantity}원`);
});

// 상품 삭제
cart.removeItem(1);

// 장바구니 내역 다시 조회
console.log('--- 장바구니 내역 (상품 삭제 후) ---');
const updatedCartItems = cart.getCartItems();
updatedCartItems.forEach((item, index) => {
  console.log(`${index + 1}. 상품명: ${item.product.name}, 수량: ${item.quantity}, 가격: ${item.product.price * item.quantity}원`);
});

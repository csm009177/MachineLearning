/** 4. 주문 처리
 * 질문: "사용자가 주문을 할 때, 주문 정보를 처리하는 타입스크립트 클래스가 필요합니다. 
 * 주문에는 상품 목록, 총 금액, 배송 주소가 포함됩니다. 주문을 생성하고, 주문 상태(배송중, 배송완료 등)를 업데이트하는 기능을 어떻게 구현할 수 있을까요? 
 * 내가 찾아볼 프로그래밍 작성법과 이해할 논리를 예제코드를 만들어서 알려주세요."
*/

// 주문 상태 열거형
enum OrderStatus {
  Pending = '주문 대기',
  Processing = '처리 중',
  Shipped = '배송 중',
  Delivered = '배송 완료',
  Canceled = '주문 취소'
}

// 상품 클래스
class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

// 주문 클래스
class Order {
  private orderStatus: OrderStatus = OrderStatus.Pending; // 주문 상태 초기화
  private products: Product[] = []; // 상품 목록
  private totalPrice: number = 0; // 총 금액
  private shippingAddress: string = ''; // 배송 주소

  // 주문 생성
  constructor(products: Product[], shippingAddress: string) {
    this.products = products;
    this.shippingAddress = shippingAddress;
    this.totalPrice = this.calculateTotalPrice();
  }

  // 총 금액 계산
  private calculateTotalPrice(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  // 주문 상태 업데이트
  updateOrderStatus(status: OrderStatus): void {
    this.orderStatus = status;
  }

  // 주문 정보 조회
  getOrderDetails(): string {
    return `
      주문 상태: ${this.orderStatus}
      상품 목록: ${this.products.map(product => `${product.name} - ${product.price}원`).join(', ')}
      총 금액: ${this.totalPrice}원
      배송 주소: ${this.shippingAddress}
    `;
  }
}

// 사용 예시
const product1 = new Product(1, '사과', 1000);
const product2 = new Product(2, '바나나', 1500);

const order = new Order([product1, product2], '서울시 강남구');

// 주문 상태 업데이트
order.updateOrderStatus(OrderStatus.Processing);

// 주문 정보 조회
console.log(order.getOrderDetails());

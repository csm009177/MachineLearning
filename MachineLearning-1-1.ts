/** 1. 상품 목록 관리
 * 질문: "타입스크립트로 상품 목록을 관리하는 클래스를 만들고 싶어요. 
 * 각 상품은 이름, 가격, 재고 수량을 가지고 있습니다. 
 * 이 클래스에서 상품을 추가하고, 전체 목록을 조회하는 기능이 필요해요. 
 * 어떻게 구현하면 좋을까요? 상품을 검색하는 메서드도 포함시켜서, 특정 상품을 이름으로 찾을 수 있게 해주세요."
*/


// 상품 클래스 정의
class Product {
  constructor(public name: string, public price: number, public stock: number) {}

  // 상품 정보 문자열로 반환
  getInfo(): string {
    return `상품명: ${this.name}, 가격: ${this.price}원, 재고: ${this.stock}개`;
  }
}

// 상품 목록 관리 클래스 정의
class ProductManager {
  private products: Product[] = []; // 상품 목록을 저장할 배열

  // 상품 추가 메서드
  addProduct(product: Product): void {
    this.products.push(product);
  }

  // 전체 상품 목록 조회 메서드
  getAllProducts(): Product[] {
    return this.products;
  }

  // 이름으로 상품 검색 메서드
  searchProductByName(name: string): Product | null {
    for (const product of this.products) {
      if (product.name === name) {
        return product;
      }
    }
    return null; // 상품이 없을 경우 null 반환
  }
}

// 사용 예시
const productManager = new ProductManager();

// 상품 추가
productManager.addProduct(new Product('사과', 1000, 50));
productManager.addProduct(new Product('바나나', 1500, 30));
productManager.addProduct(new Product('딸기', 2000, 20));

// 전체 상품 목록 조회
console.log('--- 전체 상품 목록 ---');
const allProducts = productManager.getAllProducts();
allProducts.forEach((product, index) => {
  console.log(`${index + 1}. ${product.getInfo()}`);
});

// 이름으로 상품 검색
const searchProductName = '바나나';
const searchedProduct = productManager.searchProductByName(searchProductName);
if (searchedProduct) {
  console.log(`'${searchProductName}' 상품 정보: ${searchedProduct.getInfo()}`);
} else {
  console.log(`'${searchProductName}' 상품을 찾을 수 없습니다.`);
}

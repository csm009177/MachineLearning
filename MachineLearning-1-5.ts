/** 5. 할인 쿠폰 적용 
 * 질문: "쇼핑몰에서 할인 쿠폰을 적용하고 싶어요. 
 * 타입스크립트로 쿠폰 코드를 입력받아 할인율을 적용하는 기능을 어떻게 만들 수 있을까요? 
 * 쿠폰은 한 번만 사용할 수 있고, 유효 기간이 있어야 합니다. 
 * 나는 이것을 객체로 다루고 싶은데, 고려할 만한 객체 메서드를 항목과 기능을 소개하는 설명을 추가로 설명해주세요."
*/

// 할인 쿠폰 클래스
class DiscountCoupon {
  private isUsed: boolean = false; // 쿠폰 사용 여부
  private readonly expiryDate: Date; // 유효 기간
  private readonly discountRate: number; // 할인율

  constructor(expiryDate: Date, discountRate: number) {
    this.expiryDate = expiryDate;
    this.discountRate = discountRate;
  }

  // 쿠폰 사용 가능 여부 확인
  canBeUsed(): boolean {
    return !this.isUsed && new Date() <= this.expiryDate;
  }

  // 쿠폰 사용
  useCoupon(): void {
    if (this.canBeUsed()) {
      this.isUsed = true;
      console.log(`할인 쿠폰이 성공적으로 적용되었습니다. 할인율: ${this.discountRate}%`);
    } else {
      console.log('쿠폰을 사용할 수 없습니다. 유효 기간이 만료되었거나 이미 사용되었습니다.');
    }
  }
}

// 사용 예시
const coupon = new DiscountCoupon(new Date('2024-12-31'), 10); // 2024년 12월 31일까지 10% 할인 쿠폰

// 쿠폰 사용 시나리오
coupon.useCoupon(); // 유효한 경우: 할인 쿠폰이 성공적으로 적용되었습니다.
coupon.useCoupon(); // 이미 사용한 경우: 쿠폰을 사용할 수 없습니다.

/** 2. 사용자 계정 생성
 * 질문: "쇼핑몰에서 사용자 계정을 관리하기 위한 클래스를 타입스크립트로 작성하려고 합니다. 
 * 사용자는 이름, 이메일, 비밀번호를 가집니다. 새로운 사용자를 등록하고, 이메일로 사용자 정보를 조회하는 기능이 필요해요. 
 * 이런 기능들을 어떻게 구현할 수 있을까요? 사용자의 비밀번호 변경 기능도 추가하고, 이를 위한 보안 조치를 설명해주세요."
*/

// 사용자 클래스 정의
class User {
  constructor(public name: string, public email: string, private password: string) {}

  // 이메일로 사용자 정보 조회
  getInfoByEmail(email: string): User | null {
    if (this.email === email) {
      // 보안 상의 이유로 비밀번호는 반환하지 않습니다.
      return new User(this.name, this.email, '********');
    }
    return null; // 이메일이 일치하지 않을 경우 null 반환
  }

  // 비밀번호 변경 (보안을 위해 암호화된 비밀번호를 저장하는 것이 좋습니다.)
  changePassword(currentPassword: string, newPassword: string): boolean {
    if (this.password === currentPassword) {
      this.password = newPassword; // 새로운 비밀번호로 변경
      console.log('비밀번호가 성공적으로 변경되었습니다.');
      return true;
    }
    console.log('비밀번호 변경에 실패했습니다. 현재 비밀번호가 일치하지 않습니다.');
    return false;
  }
}

// 사용자 관리 클래스 정의
class UserManager {
  private users: User[] = []; // 사용자 목록을 저장할 배열

  // 새로운 사용자 등록
  registerUser(user: User): void {
    this.users.push(user);
  }

  // 이메일로 사용자 정보 조회
  getUserInfoByEmail(email: string): User | null {
    for (const user of this.users) {
      const userInfo = user.getInfoByEmail(email);
      if (userInfo) {
        return userInfo;
      }
    }
    return null; // 사용자 정보를 찾을 수 없을 경우 null 반환
  }
}

// 사용 예시
const userManager = new UserManager();

// 사용자 등록
userManager.registerUser(new User('홍길동', 'hong@example.com', 'password123'));

// 이메일로 사용자 정보 조회
const userEmail = 'hong@example.com';
const userInfo = userManager.getUserInfoByEmail(userEmail);
if (userInfo) {
  console.log(`'${userEmail}' 사용자 정보: 이름 - ${userInfo.name}, 이메일 - ${userInfo.email}`);
} else {
  console.log(`'${userEmail}' 사용자를 찾을 수 없습니다.`);
}

// 비밀번호 변경 (보안을 위해 암호화된 방법을 사용하는 것이 좋습니다.)
const currentPassword = 'password123';
const newPassword = 'newPassword123';
userInfo?.changePassword(currentPassword, newPassword);
  console.log(`'${searchProductName}' 상품 정보: ${searchedProduct.getInfo()}`);
} else {
  console.log(`'${searchProductName}' 상품을 찾을 수 없습니다.`);
}

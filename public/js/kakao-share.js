// 1. SDK 초기화 영역
// 필수: 카카오 디벨로퍼스(https://developers.kakao.com)에서 발급받은 실제 JavaScript 키로 변경해주세요.
const KAKAO_JS_KEY = '여기에_JavaScript_키를_입력하세요';

// SDK 연결 및 키 검증, 중복 초기화 방지
if (!Kakao.isInitialized()) {
    Kakao.init(KAKAO_JS_KEY);
    console.log('Kakao SDK Initialized:', Kakao.isInitialized());
}

// 2. 메시지 템플릿 설계 및 4. 버튼 구현 (방식 A: createDefaultButton - 권장)
// 특징: 컨테이너 ID 바인딩, 간단한 구현, 유지보수 용이
Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
        title: '특별한 이벤트 초대 🎁',
        description: '이번 주말까지 진행되는 특별한 이벤트를 확인해보세요!',
        imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4oJ8QzXV1oK/o.jpg', // 서비스에 맞는 디자인 이미지 URL로 교체
        link: {
            // 5. URL 설계: 모바일 / PC 동일 URL 사용 권장 (사전에 카카오 디벨로퍼스 도메인에 등록되어 있어야 함)
            mobileWebUrl: 'https://myservice.com/event/45',
            webUrl: 'https://myservice.com/event/45',
        },
    },
    buttons: [
        {
            title: '자세히 보기',
            link: {
                mobileWebUrl: 'https://myservice.com/event/45',
                webUrl: 'https://myservice.com/event/45',
            },
        },
    ],
});


// 2. 메시지 템플릿 설계 및 4. 버튼 구현 (방식 B: sendDefault - 커스텀 버튼용)
// 특징: 직접 만든 버튼에 onclick 이벤트로 함수를 호출하여 사용. 디자인 자유도가 높음.
function shareMessage() {
    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: '친구야 놓치지 마! 🎯',
            description: '우리 서비스의 새로운 기능을 소개할게. 지금 바로 확인해봐.',
            imageUrl:
                'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4oJ8QzXV1oK/o.jpg',
            link: {
                mobileWebUrl: 'https://myservice.com/product/123',
                webUrl: 'https://myservice.com/product/123',
            },
        },
        buttons: [
            {
                title: '상품 확인하기',
                link: {
                    mobileWebUrl: 'https://myservice.com/product/123',
                    webUrl: 'https://myservice.com/product/123',
                },
            },
        ],
    });
}

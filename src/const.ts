import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-01-10 14:20", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [1]

export const LOCATION = "테라리움 서울"
export const LOCATION_ADDRESS = "서울 노원구 노원로 247, 8층"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [127.07345847832732, 37.63945011580623]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 1618264201

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 660312663

export const BRIDE_FULLNAME = "최지원"
export const BRIDE_FIRSTNAME = "지원"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "최동열"
export const BRIDE_MOTHER = "이소영"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-7663-8867",
    account: "우리은행 1002-154-635876",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-5299-8873",
    account: "우체국 011056-02-091629",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-2815-8867",
    account: "우리 165297-39-102101",
  },
]

export const GROOM_FULLNAME = "김산"
export const GROOM_FIRSTNAME = "산"
export const GROOM_TITLE = "장남"
export const GROOM_FATHER = "김선진"
export const GROOM_MOTHER = "이명희"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-9352-2209",
    account: "국민은행 941602-00-169293",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-2392-2208",
    account: "신한은행 110-519-376403",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-6549-2208",
    account: "농협 170600-56-037898",
  },
]

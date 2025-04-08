/**
 * 24시간 형식 날짜 문자열을 '오전/오후 h시' 형태로 변환
 * @param dateTime - 예: '2025-04-08 12:00:00'
 * @returns 예: '오후 12시'
 */
export const formatKoreanTime = (dateTime: string): string => {
  const date = new Date(dateTime);
  const hours = date.getHours();
  const period = hours < 12 ? "오전" : "오후";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${period} ${hour12}시`;
};

/**
 * 'YYYY-MM-DD hh:mm:ss' 형식을 '8일 오전 12시'처럼 변환
 * @param dateTime - 예: '2025-04-08 00:00:00'
 * @returns 예: '8일 오전 12시'
 */
export const formatKoreanTimeWithDay = (dateTime: string): string => {
  const date = new Date(dateTime);
  const day = date.getDate();
  const hours = date.getHours();
  const period = hours < 12 ? "오전" : "오후";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${day}일 ${period} ${hour12}시`;
};

export function getKoreanDay(dateString: string): string {
  const date = new Date(dateString);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return days[date.getDay()];
}

export function formatMonthDay(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}.${day}`;
}

export function isDayTime(): boolean {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18; // 6 - 17시: 낮
}

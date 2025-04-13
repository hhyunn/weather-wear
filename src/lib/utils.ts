/**
 * 24시간 형식 날짜 문자열을 '오전/오후 h시' 형태로 변환
 * 예: '2025-04-08 12:00:00' → '오후 12시'
 */
export function formatKoreanTime(dateTime: string): string {
  const date = new Date(dateTime);
  return new Intl.DateTimeFormat("ko-KR", {
    hour: "numeric",
    hour12: true,
  }).format(date);
}

/**
 * 날짜 + 시간을 '8일 오전 12시' 형태로 변환
 * 예: '2025-04-08 00:00:00' → '8일 오전 12시'
 */
export function formatKoreanTimeWithDay(dateTime: string): string {
  const date = new Date(dateTime);
  const day = date.getDate();
  const time = new Intl.DateTimeFormat("ko-KR", {
    hour: "numeric",
    hour12: true,
  }).format(date);
  return `${day}일 ${time}`;
}

/**
 * 요일을 한글로 반환
 * 예: '2025-04-08' → '화'
 */
export function getKoreanDay(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ko-KR", {
    weekday: "short",
  }).format(date);
}

/**
 * 'YYYY-MM-DD' → 'M.D' 형식으로 변환
 * 예: '2025-04-08' → '4.8'
 */
export function formatMonthDay(dateString: string): string {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}.${day}`;
}

/**
 * 현재 시간이 낮(6시~17시)인지 판별
 */
export function isDayTime(): boolean {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18;
}

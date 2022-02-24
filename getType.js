// 특정 데이터의 타입을 알아 낼 수 있음(정확)

export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}
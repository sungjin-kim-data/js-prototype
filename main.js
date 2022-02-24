import getType from './getType'

// typeof = 특정한 데이터의 타입을 알아 낼 수 있음
console.log(typeof 'hello world') //strinig
console.log(typeof 123) //number
console.log(typeof true) //boolean
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof {}) //object
console.log(typeof []) //object

// getType
console.log(getType(123)) //[Object Number] // slice(8, -1) 추가 Number
console.log(getType(false)) //[Object Boolean] // slice(8, -1) 추가 Boolean
console.log(getType(null)) //[Object Null] // slice(8, -1) 추가 Null
console.log(getType({})) //[Object Object] // slice(8, -1) 추가 Object
console.log(getType([])) //[Object Array] // slice(8, -1) 추가 Array


// 산술 연산자(arithmetic operator)

console.log(1 + 2)
console.log(5 + 7)
console.log(3 * 4)
console.log(10 / 2)
console.log(7 % 5) //나머지의 값


//할당 연산자 (assignment operator) '='

let a = 2
// a = a + 1
a += 1

console.log(a)


// 비교 연산자(comparison operator)

const aa = 1
const b = 3

console.log(aa === b)
console.log(aa !== b)



function isEqual(x, y) {
  return x === y
}
console.log(isEqual(1, 1))
console.log(isEqual(2, '2'))


const bb = 13
const cc = 13

console.log(bb <= cc)


// 논리 연산자(logical operator)

const f = 1 === 123
const g = 'ABc' === 'AB'
const h = false

console.log(f)
console.log(g)
console.log(h)

console.log('&&: ', f && g && h) // && 그리고 and 연산자 하나라고 false 면 false
console.log('||: ', f || g || h) // || 또는 or 연산자 하나만 true 면 true
console.log('!: ', !f) //! not ,부정 연산자  true = false / false = true 출력


// 삼항 연산자(ternary operator)

const n = 1 < 2

if (n) {
  console.log('참')
} else {
  console.log('거짓')
}

console.log(n ? '참' : '거짓')


//  반복문 (For statement)
//  for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent)
    })
  }
  ulEl.appendChild(li)
}

// 변수 유효범위(Variable Scope)
// var, let, const

function scope() {
  if (true) {
    let jj = 123
    console.log(jj)
  }
}
scope()

// 형 변환(Type conversion)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN
const a = 1
const b = '1'

console.log(a === b) // == 동등연상자

if ('false') {
  console.log(123)
}

// 함수 복습

function sum(x, y) { // 매개 변수
  return x + y
}

const a = sum(1, 3)
const b = sum(4, 12) // 인수

console.log(a)
console.log(b)
console.log(a + b)

// 화살표 함수
const doubleArrow = x => ({
  name: 'sjk5838'
}) 
console.log('doubleArrow', doubleArrow(7))


// 즉시 실행함수
// IIFE, Immediately-Inavoked Function Expression

const a = 7
function double() {
  console.log(a * 2)
}
double();

(function () {
  console.log(a * 2)
}());

// 호이스팅(Hoistiong)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

function double() {
  console.log(a * 2)
}

double()


// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 정료

const timer = setInterval(() => {
  console.log('sjl5839')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
}) 


// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('sjk5838')
    cb()
  },3000)
}
timeout(() => {
  console.log('kimbalang')
}) 


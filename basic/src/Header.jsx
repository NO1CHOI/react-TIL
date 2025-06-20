import './Header.css';
// Header
function Header(){
    const num1 = 5;
    const num2 = 3;
    const greeting = '안녕하세요~';
    const program = '리액트';
    /* 삼향조건연산자 */
    const login = false;
    return(
        <header>
            <h1 style={{backgroundColor:'lightblue',color:'red'}}>logo</h1>
            <p style={{fontSize:'3rem'}}>숫자 {num1}에서 {num2}을 뺀 결과 {num1 - num2}</p>
            <p>안녕하세요, 리액트 출력결과 {greeting+program}</p>
            <p style={{fontWeight:'700',backgroundColor:'coral',color:'#fff'}}>{login ? '로그인 성공' : '로그인 필요'}</p>
            {/* 삼향조건연산자를 써서 const isLogin = false; 일때 p 태그에 '로그인 필요' 출력하기,
            반대로 true 면 p 태그로 '로그인 성공' 출력하기 */}
        </header>
    )
}
export default Header;

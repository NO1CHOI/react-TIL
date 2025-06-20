import Header from "./Header.jsx";
import './Test.css';

// 컴포넌트 생성
function Test(){
    return(
        <>
        <Header/>
            <h1>Test 컴포넌트</h1>
        </>
    )
}
// 다른컴포넌트에서 해당 Test 컴포넌트 사용가능하도록 내보내기 설정
export default Test;

//자식 컴포넌트
function Aaside(){
    return(
        <aside>
            <h1>서브메뉴
            <a>메뉴1</a>
            </h1>
        </aside>
    )
}
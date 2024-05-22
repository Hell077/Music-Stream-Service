import style from './header.module.css'
import Input from '../DefaultComponents/input';
import Button from '../DefaultComponents/button';
import Paragraph from '../DefaultComponents/paragraph';

function Header() {
    return (
    <>
        <header>
            <div className={style.container}>
                <Input />
                <Button width={"40px"} height={"40px"} text={""}/>
                <Button width={"40px"} height={"40px"}/>
                <Button width={"40px"} height={"40px"}/>
                <Button width={"40px"} height={"40px"}/>
                <Paragraph />
            </div>
            <div className={style.profile}></div>
        </header>
    </>);
}

export default Header;
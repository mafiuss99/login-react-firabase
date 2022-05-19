import Header from "../../common/Header";
import { Main } from "./style"

const ThemeDefault = ({children}) => {
    return (
        <>  
            <Header/>
            <Main>
                {
                    children
                }
            </Main>
        </>
    )
}

export default ThemeDefault;
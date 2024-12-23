
import "./screen.css"
import DisplayValue from "../../types/DisplayValue.ts"

interface IProps extends DisplayValue {
}



function Screen(props: IProps){



    return (
        <div className="screen">
            <div className="equation">{props.equation}</div>
            <div className="result">{props.result}</div>
        </div>
    )

}



export default Screen;
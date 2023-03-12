import "./Error.css"
import ProductsBtn from "../ProductsBtn/ProductsBtn"
import { useEffect } from "react"

const Error = ({ emptyCartt }) => {

    useEffect(() => {
        document.title = " MundoGamer | Error"
    })

    return (
        <div className="content">
            <div className="content_img">
                <img src="https://i.imgur.com/LW4aOVO.jpeg" alt="404" />
                <p className="content_number">404</p>
            </div>
            <div className="conten__Description">
                <p className="content_error">Pagina no encontrada</p>
                <p className="content_text">{emptyCartt}</p>
                <div className="content_btn">
                    <ProductsBtn />
                </div>
            </div>
        </div>
    )
}
export default Error
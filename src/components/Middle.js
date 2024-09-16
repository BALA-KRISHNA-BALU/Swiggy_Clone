import { useState } from "react"
import resto from "../Mockdata/Data"
import Resto from "./Resto"

// const Card = (props) => {
//     return <div className="card">
//         <img className="img" src={props.bala.img_id}></img>
//         <div className="card-text">
//             <h1>{props.bala.name}</h1>
//             <p>⭐{props.bala.ratings}ratings</p>
//             <p>📍{props.bala.location}min</p>
//             <p>🕒{props.bala.delicvery}min</p>
//             <p>💵{props.bala.cost}</p>
//         </div>
//     </div>
// }
// const CardFlex = () => {
//     const [data, setdata] = useState(resto)
//     return <div className="flex">
//         {
//             data.map((x) => {
//                 return <Card bala={x} />
//             })
//         }

//     </div>

// }

const Middle = () => {
    return <div className="middle">
        <Resto/>
    </div>
}
export default Middle
import { useState } from "react"
import resto from "../Mockdata/Data"

const Card = (props) => {
    return <div className="card">
        <img className="img" src={props.item.img_id}></img>
        <div className="card-text">
            <h1>{props.item.name}</h1>
            <p>⭐{props.item.ratings}</p>
            <p>📍{props.item.location}</p>
            <p>🕒{props.item.delicvery}min</p>
            <p>💵{props.item.cost}/-Rs</p>
        </div>
    </div>
}

const Resto = ()=>{
    const[search,setSearch] = useState('')
    const[data,setData] = useState(resto)
    const [restoHeading,setRestoHeading] = useState("With Online Food Delivery")
    return <div className="resto-page">
        <h1 className="resto-heading">Resturants {restoHeading} in Bangalore</h1>
        <div className="filter-container">
            <div className="filter-btns">
                <button onClick={()=>{
                    const lesstime = data.sort((a,b)=>a.delicvery - b.delicvery);
                    setData([...lesstime])
                    setRestoHeading("With Fast Delivery")
                }}>Fast Delivery</button>
                <button onClick={()=>{
                  const four = data.filter((x)=>{
                        return x.ratings>4
                    })
                    setData(four)
                    setRestoHeading("With 4+ Ratings")
                }}>Ratings 4.0+</button>
                <button onClick={()=>{
                   const less = data.filter((x)=>{
                        return x.cost<300
                    })
                    setData(less)
                    setRestoHeading("with Less Than 300Rs")

                }}>Less than Rs 300/-</button>
                <button onClick={()=>{
                    const middleCost = data.filter((x)=>{
                        return x.cost>300 && x.cost<500
                    })
                    setData(middleCost)
                    setRestoHeading("with cost in between 300-500Rs")
                }}> Rs.300-Rs500/-</button>
            </div>
            <div className="input-search">
                <input type="text" placeholder="EX:Kfc,Domino's" value = {search} onChange={(s)=>{setSearch(s.target.value)}}></input>
                <button onClick={()=>{
                   const searchName =  data.filter((x)=>{
                    return x.name.toLowerCase().includes(search.toLowerCase())
                    })
                    setData(searchName)
                }}>Search</button>
            </div>
        </div>
        {/*<-----------search UI is completed----------------->*/}
        {/*<---------------let's start resto cards-----------> */}
        <div className="card-flex">
          {
             data.map((x)=>{
                return <Card  item={x}/>
             })
          }
        </div>

    </div>
}
export default Resto
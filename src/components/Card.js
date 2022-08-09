// import image1 from '../images/img-Katie.png'
// import imginfo1 from '../images/info-Katie.png'
// import image2 from '../images/img-wedding.png'
// import imginfo2 from '../images/info-wedding.png'
// The way to display current time in hours
// const date = new Date()
// const hours = date.getHours()
// let timeofday 
// if(hours<12){
//     timeofday = 'morning'
// }
// else if(hours>=12 && hours<=17){
//     timeofday = 'afternoon'
// }
// else {
//     timeofday = 'night'
// }


function Card(props) {
    let badgeText
    if(props.openSpots === 0){
        badgeText = 'SOLD OUT'
    }
    else if(props.location === "Online"){
        badgeText = 'ONLINE'
    }
    

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--image" />
            <div className="card--stats">
                <img src={props.star} alt="star" width="200px" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;

// line number 24 ----> 
{/* <img src={`../images/${props.img}`} alt="" />  provided I put the images in src folder */}
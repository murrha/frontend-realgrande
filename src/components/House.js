// const House = (props) => {
//     console.log("in house component");

//     console.log(props); 
//     return (<>
//     <div className="row">
//         <div className="col-sm-6">
//             <b>{props.houseinfo.address}</b>
//         </div>
//         <div className="col-sm-6">
//         <b>Price: ${props.houseinfo.price} USD</b>
//         </div>
//     </div>
//     <div className="row">
//         <div className="col-sm-6">
//             <img className="img-fluid" src="/img/1.jpg" alt="house"/>
//         </div>
//         <div className="col-sm-6">
//             <p>{props.houseinfo.description}</p>
//         </div>
//     </div>
//     </> );
// }
 
// export default House;

const House = (props) => {

    //if we haven't gotten it, then return the loading
    
    if (!props.houseinfo) {
        return <p>Loading...</p>;
      }

   
    return (
        <>
        <div className="row">
            <div className="col-sm-6">
                <b>{props.houseinfo.address}</b>
            </div>        
            <div className="col-sm-6">
                <b> Price: USD {props.houseinfo.price}</b>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 ">
                <img className='img-fluid' src={`/img/${props.houseinfo.photo}`} alt="house"/>
            </div>
            <div className="col-sm-6">
            <p>Description</p>
                <p>{props.houseinfo.description}</p>
                
            </div>
        </div>
    </>);
}
 
export default House;



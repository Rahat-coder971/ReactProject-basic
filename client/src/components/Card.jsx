
function Card({img,tittle,RS}){

    return(
        <div className="rounded-md flex justify-between w-[70%] flex-col sm:w-[25%] border-2	p-2">
         <img className="w-[100%] overflow-hidden h-[30vh]" src={img} alt="" />
         <p className="font-semibold">{tittle}</p>
         <p className="font-bold">RS:{RS}</p>
         <button className="bg-blue-500">BUY</button>
        </div>
    )
}
export default Card;
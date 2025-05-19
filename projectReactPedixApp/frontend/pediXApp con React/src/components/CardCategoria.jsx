

function CardCategoria({name, imageUrl}) {
  return (
    <>
        <div className={`max-w-sm h-32 bg-[url('${imageUrl}')] bg-no-repeat bg-cover rounded-2xl`}>
            <div className="flex justify-center items-center h-32">
                <h2 className="text-2xl text-white max-w-sm font-bold" >{name}</h2>
            </div>
        </div>
    </>
  )
}

export default CardCategoria
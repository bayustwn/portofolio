export default function Navbar() {
    return(
        <div className="flex z-10 flex-row gap-5">
            {Array.from([{
                "name" : "Contact",
                "destination" : "#"
            },
            {
                "name" : "About",
                "destination" : "#about"
            }
            ,{
                "name" : "Project",
                "destination" : "#project"
            }]).map((item,index)=>{
                return(
                    <a href={item.destination} className={`cursor-pointer text-light-gray hover:text-white`} key={index}>{item.name}</a>
                )
            })}
        </div>
    )
}
export default function Navbar() {
    return(
        <div className="flex z-10 flex-row flex-wrap justify-center gap-x-5 gap-y-2 text-sm md:text-base">
            {Array.from([{
                "name" : "Contact",
                "destination" : "#contact"
            },
            {
                "name" : "About",
                "destination" : "#about"
            }
            ,{
                "name" : "Skills",
                "destination" : "#skills"
            }
            ,{
                "name" : "Experience",
                "destination" : "#experience"
            }
            ,{
                "name" : "Certification",
                "destination" : "#certification"
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

import {logoIconsList} from "../constants/index.js";

const LogoSection = () => {
    const LogoIcon = ({icon}) => {
        return (
            <div className="flex items-center gap-2">
                <img src={icon.imgPath} alt={icon.name}/>
                <span>{icon.name}</span>
            </div>
        )
    }
    return (
        <div className="md:my-20 my-10 relative">
            <div className="gradient-edge "/>
            <div className="gradient-edge "/>

            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon)=>(
                        <LogoIcon key={icon.name} icon={icon}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default LogoSection

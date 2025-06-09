
interface Props {
children:React.ReactNode;
}
export const Tile = (
    {
children
    }: Props
) =>{
    return(
        <div className="w-full shadow-sm border-r border-r-[#085BA7]/10">
{
    children
}
        </div>
    )
}
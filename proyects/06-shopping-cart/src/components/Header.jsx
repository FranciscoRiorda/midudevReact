import { Filters } from "./Filters";

export function Header ({changeFilter}){
    return(
        <>
            <h1>React Shop 🛒</h1>
            <Filters changeFilter={changeFilter}/>
        </>
    )
}
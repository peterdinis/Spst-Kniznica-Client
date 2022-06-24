import "./Shared.css";

interface Props {
    name: string;
}

function Header(props: Props) {
    return (
        <>
            <h1 className="header">
                {props.name}
            </h1>    
        </>
    )
}

export default Header
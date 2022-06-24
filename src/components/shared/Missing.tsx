type Props = {
    name: string;
}

function Missing(props: Props) {
    return (
        <>
            <p className="text-red-700 text-2xl font-bold">{props.name}</p>
        </>
    )
}

export default Missing
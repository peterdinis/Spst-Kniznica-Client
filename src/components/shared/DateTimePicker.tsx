import { useDate } from "@spst-bj/frontend/hooks";

function DateTimePicker() {
    const { date, time} = useDate();

    return (
        <>
            <span className="font-bold text-xl ml-8">Aktuálny čas:  {date} {time}</span>
        </>
    )
}

export default DateTimePicker
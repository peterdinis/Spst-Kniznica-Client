export interface IBookBadge {
    name: string;
}


// TODO: Later Update this
export const DangerBadge = ({name}: IBookBadge) => {
    return (
        <>
          <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">
        {name}
      </span>
        </>
    )
}

function BookBadge({name}: IBookBadge) {
  return (
      <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-500 text-white rounded">
        {name}
      </span>
  );
}

export default BookBadge;

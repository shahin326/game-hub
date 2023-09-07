import { Fragment } from "react";
interface Props {
  items: string[];
  heding: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heding, onSelectItem }: Props) {
  return (
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => onSelectItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;

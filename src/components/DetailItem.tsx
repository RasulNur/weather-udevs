import type { DetailItemProps } from "../types/props.types";

export default function DetailItem({ title, value }: DetailItemProps) {
    return (
        <li className="list-item">
            <h4 className="label">{title}</h4>
            <p className="value">{value}</p>
        </li>
    );
}

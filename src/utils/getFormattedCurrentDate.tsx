export default function getFormattedCurrentDate(date: Date): string {
    const time = date.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const weekday = date.toLocaleDateString("ru-RU", {
        weekday: "long",
    });

    const day = date.getDate();
    const month = date.toLocaleDateString("ru-RU", {
        month: "short",
    });
    const year = date.getFullYear().toString().slice(-2);

    return `${time} - ${weekday[0].toUpperCase() + weekday.slice(1)}, ${day} ${
        month[0].toUpperCase() + month.slice(1)
    }'${year}`;
}

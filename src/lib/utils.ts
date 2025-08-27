import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import customParseFormat from 'dayjs/plugin/relativeTime';


dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

export function toTimeSincePublish(ISODate: string) {
    return dayjs(ISODate).fromNow();
}

export function toPrettyDate(ISODate: string) {
    return dayjs(ISODate).format("DD. MMMM YYYY")
}

export function toUnixDate(ISODate: string) {
    return dayjs(ISODate).format("x")
}
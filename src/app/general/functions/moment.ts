import * as moment from 'moment';

export const relativeTime = (date: Date) => {
    return moment(date).fromNow();
};

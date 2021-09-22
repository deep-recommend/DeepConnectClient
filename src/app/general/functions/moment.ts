import * as moment from 'moment'

export const relativeTime = (date: string) => {
    return moment(date).fromNow()
}

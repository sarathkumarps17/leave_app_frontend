import { extendMoment } from "moment-range";
import originalMoment from "moment";
const moment = extendMoment(originalMoment);


export const getDates = (fromDate, toDate) => {

    let dates = [];
    // console.log(fromDate, toDate)
    let currDate = fromDate.startOf('day');
    let lastDate = toDate.startOf('day');

    while (currDate.add(1, 'days').diff(lastDate) < 0) {
        dates.push(currDate.clone().toDate());
    }

    return dates;

}


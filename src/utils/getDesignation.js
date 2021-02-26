const getDesignation = (userType) => {
    switch (userType) {
        case 1:
            return "Commissioner/Deputy commissioner";
        case 2:
            return "Assistant commissioner"
        case 3:
            return "Inspector"
        case 4:
            return "Sub Inspector"
        case 5:
            return "Officer"
        default:
            break;
    }
}
export default getDesignation;
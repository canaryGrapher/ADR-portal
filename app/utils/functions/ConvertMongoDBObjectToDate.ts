const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ConvertMongoDBObjectToDate = (mongoId: string): string => {
    const time = mongoId.substring(0, 8);
    const date = new Date(parseInt(time, 16) * 1000);
    const convertGMTtoIST = new Date(date.getTime() + 19800);
    const humanReadableDateandTime = `${months[convertGMTtoIST.getMonth()]} ${convertGMTtoIST.getDate()}, ${convertGMTtoIST.getFullYear()} ${convertGMTtoIST.getHours()}:${convertGMTtoIST.getMinutes()}`;
    return humanReadableDateandTime;
}

export { ConvertMongoDBObjectToDate }
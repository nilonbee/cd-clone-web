export default function convertArrayToObjectArray<T>(data: T[]): T[] {
    const jsonString = JSON.stringify(data);
    const parsedData = JSON.parse(JSON.parse(jsonString));

    return parsedData;
}

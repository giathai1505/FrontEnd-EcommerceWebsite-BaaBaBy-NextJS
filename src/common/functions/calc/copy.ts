export const copyObject = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

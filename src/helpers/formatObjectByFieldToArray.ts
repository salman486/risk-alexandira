export default function formatObjectByFieldToArray<
  T extends Record<string, Record<string, string>>
>(obj: T, byField: keyof T) {
  const idsArray = obj[byField];

  type keys = keyof T;
  type ids = keyof typeof idsArray;

  const formattedArr: Record<keyof T, string>[] = [];
  const headings = Object.keys(idsArray) as ids[];
  const allKeys = Object.keys(obj) as keys[];

  headings.forEach(id => {
    const formattedObj: Record<keyof T, string> = {} as Record<keyof T, string>;

    allKeys.forEach(key => {
      formattedObj[key] = obj[key] ? obj[key][id] || '' : '';
    });

    formattedArr.push(formattedObj);
  });

  return formattedArr;
}

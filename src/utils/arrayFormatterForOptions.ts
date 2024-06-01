export const arrayFormatterForOptions = (array: any[], key: string) => {
  return array.map((item: any) => {
    return { value: item.id, label: item[key] };
  });
};

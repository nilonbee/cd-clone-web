export async function fetchData<T>(
    apiRequest: (params: any) => Promise<T[] | undefined>,
    setData: React.Dispatch<React.SetStateAction<string[]>>,
    mapper: (item: T) => string
) {
    try {
        const data = await apiRequest({ status: 1 });
        if (data) {
            const mappedData = data.map(mapper);
            setData(mappedData);
        }
    } catch (error) {
        console.error("Failed to fetch data:", error);
        // Handle error appropriately
    }
}
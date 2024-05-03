export const allJobApi = async () => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            limit: 10,
            offset: 0,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body,
        };

        const response = await fetch(
            "https://api.weekday.technology/adhoc/getSampleJdJSON",
            requestOptions
        );
        return response.json();
    } catch (error) {
        console.log("Failed to fetch job list");
    }
};

export const allJobApi = async (jobLimit) => {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            limit: jobLimit,
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

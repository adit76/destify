// A mock function to mimic making an async request for data
export function fetchRoomDetails(id: string) {
  return fetch(
    `https://destifyfunc-api-dev.azurewebsites.net/api/rooms?roomIds=${id}`,
    {
      method: "GET",
      headers: {
        "x-functions-key":
          "trsmthTaK7p/CS6CSQamg0zB9xxmd9w5COrtM9vS1azadc4sksMYPA==",
      },
    }
  ).then((res) => res.json());
}

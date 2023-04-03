import eventAPI from "../api/eventAPI";

export async function getCompanyEvents(token) {
  const events = await eventAPI.get("/company/all", {
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return events.data;
}

export async function getAllEvents() {
  const events = await eventAPI.get("/all", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return events.data;
}

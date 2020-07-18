const baseUrl = "https://5e98af0c5eabe7001681c458.mockapi.io/v1/events";

export const fetchEvents = () => {
  return fetch(baseUrl).then((response) => response.json());
};

export const fetchOneEvent = (id) => {
  return fetch(`${baseUrl}/${id}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error");
  });
};

export const saveEvent = (eventData) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error");
  });
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  });
};

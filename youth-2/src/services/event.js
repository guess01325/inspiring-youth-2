import api from "./api-config";


export const getAllEvents = async () => {
    const resp = await api.get("/events")
    return resp.data; 
}

export const getOneEvent = async (id) => {
    const resp = await api.get(`/events/${id}`);
    return resp.data
}

export const postEvent = async (eventData) => {
    const resp = await api.post(`/events`, {event: eventData});
    return resp.data;
}

export const putEvent = async (id, eventData) => {
    const resp = await api.put(`/events/${id}`, {event: eventData});
    return resp.data
}

export const getUserEvent = async () => {
    const respt = await api.get("/users/events")
}


export const deleteEvent = async (id) => {
    const resp = await api.delete(`/events/${id}`);
    return resp
  };
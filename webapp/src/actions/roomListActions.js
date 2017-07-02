export const addRoom= (id, name) => {
    return {
        TYPE:'ADD_ROOM',
        id,
        name,
        player:1,
        status:"waiting"
    }
}

export default {
    loginPage: {
        isLogin: false,
        userName:"jason106"
    },
    roomListPage: {
        rooms: [
            {id:1,name:"Room 1",numPlayer:1,status:"Waiting..."},
            {id:2,name:"Room 2",numPlayer:2,status:"Waiting..."},
            {id:3,name:"Room 3",numPlayer:2,status:"Playing..."}
        ],
    },
    roomDetailPage: {
        info: {
            id:1,
            roomName:"Room 1"
        },
        slots: [
            {
                id:0,
                name:"player 1",
                status:0
            },
            {
                id:1,
                name:"computer insane",
                status:0,
            }
        ]
        
    }
}
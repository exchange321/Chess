import React from 'react' 

const Room = ({ roomId, name, numPlayer, status, onClick }) => (
    <button type="button" className="list-group-item list-group-item-action" 
        onClick={e => onClick(roomId)}>
        <div>
            ID #{roomId}: {name} - (Status: {status}) 
        </div>
        <i key="icon_1" className="fa fa-user-circle" aria-hidden="true"></i>
        {numPlayer==2?
        <i key="icon_2" className="fa fa-user-circle" aria-hidden="true"></i>
        :<i key="icon_2" className="fa fa-circle-o" aria-hidden="true"></i>}
        
    </button>
) 

export default Room
import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
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

Room.propTypes = {
  roomId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  numPlayer: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Room;

import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick }) => (
  <button
    className={
      active ? 'btn btn-default btn-sm active' : 'btn btn-default btn-sm'
    }
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;

import React from 'react';

import './TasteModal.scss';

class TasteModal extends React.PureComponent {
  render() {
    const { tasteList, handleModalClick } = this.props;
    const tasteButton = tasteList.map(taste => {
      return (
        <button
          key={taste.id}
          name={taste.id}
          className="tasteButton"
          onClick={e => {
            handleModalClick(e.target.name);
          }}
        >
          {taste.taste}
        </button>
      );
    });
    return <div className="tasteModal">{tasteButton}</div>;
  }
}

export default TasteModal;

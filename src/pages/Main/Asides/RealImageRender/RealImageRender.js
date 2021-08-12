import React from 'react';

class RealImageRender extends React.Component {
  render() {
    const { imageCounter, imgSize, description, imageList, imageOnClick } =
      this.props;
    const _imageList = imageList.map(({ id, name, url }, idx) => {
      return (
        <div
          key={idx}
          className={'imgWrap'}
          aria-hidden={idx + 1 === imageCounter ? 'false' : 'true'}
        >
          <img
            id={id}
            alt={name}
            src={url}
            width={imgSize.width}
            height={imgSize.height}
            onClick={imageOnClick}
          />
          {description && (
            <div className="imgDescription">
              <span className="imgFlag">신메뉴 오픈</span>
              <span className="imgDescTitle">
                한 여름의 힐링캠핑 어쩌구 저저구 꾸깃 어쩌
              </span>
              <span className="imgDescText">꾸깃이 발행하는 웹 매거진</span>
            </div>
          )}
        </div>
      );
    });
    return <>{_imageList}</>;
  }
}

export default RealImageRender;

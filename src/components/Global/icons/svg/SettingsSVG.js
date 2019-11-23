import React from 'react';

export default ({
  width = '30',
  height = '30',
  fill = '000000',
  margin = '0',
  padding = '0 0 0 0',
  viewBox = '0 0 30 30'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      margin={margin}
      padding={padding}
    >
      <path
        d="M23.4893 21.4596C19.5558 20.0266 18.2984 18.817 18.2984 16.2271C18.2984 14.6729 19.5872 13.6656 20.0266 12.3335C20.4659 11.0015 20.7201 9.42435 20.9313 8.27713C21.1426 7.1299 21.2265 6.68617 21.3414 5.46382C21.4819 3.9383 20.4606 0 15 0C9.54098 0 8.51647 3.9383 8.6601 5.46382C8.775 6.68617 8.8594 7.12995 9.0702 8.27713C9.28103 9.42432 9.5327 11.0014 9.97178 12.3335C10.4108 13.6657 11.7015 14.6729 11.7015 16.2271C11.7015 18.817 10.4441 20.0266 6.51058 21.4596C2.56278 22.8958 0 24.312 0 25.3125V30H30V25.3125C30 24.3136 27.4356 22.8974 23.4893 21.4596Z"
        fill="white"
      />
    </svg>
  );
};
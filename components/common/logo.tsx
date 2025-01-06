import React from 'react';

const Logo = ({ isScroll }: { isScroll: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 512 512"
      data-bbox="61.113 68.115 389.775 375.771"
      //   style="overflow: visible;"
    >
      <g
        transform="matrix(0.660527377631415, 0, 0, 0.660527377631415, 40.206375963555956, -33.21944297215209)"
        data-uid="o-69ae05979579414eba145f7f5b84525e"
        fill={isScroll ? '#1D4ED8' : 'white'}
      >
        <path
          transform="matrix(1.0522880554199219, 0, 0, 1.0522880554199219, 76.11219024658203, 116.79329681396484)"
          data-uid="o-4b0d2d9dfb1641f5b89db8cc9ce400b6"
        ></path>
      </g>
    </svg>
  );
};

export default Logo;
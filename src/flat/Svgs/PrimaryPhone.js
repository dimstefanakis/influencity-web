function PrimaryPhone(props) {
  return (
    <svg width={347} height={682} viewBox="0 0 347 682" fill="none" {...props}>
      <g filter="url(#filter0_d)">
        <rect x={4} width={339} height={674} rx={28} fill="#fff" />
        <rect
          x={6}
          y={2}
          width={335}
          height={670}
          rx={26}
          stroke="#000"
          strokeWidth={4}
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x={0}
          y={0}
          width={347}
          height={682}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default PrimaryPhone;

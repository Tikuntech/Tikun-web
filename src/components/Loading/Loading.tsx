import React from 'react'

export default function Loading({ className }: { className?: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div> */}
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
        style={{
          shapeRendering: 'auto',
          display: 'block',
          background: 'transparent',
        }}
      >
        <g>
          <circle
            strokeLinecap="round"
            fill="none"
            strokeDasharray="50.26548245743669 50.26548245743669"
            stroke="#92DEED"
            strokeWidth="8"
            r="32"
            cy="50"
            cx="50"
          >
            <animateTransform
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            ></animateTransform>
          </circle>
          <g></g>
        </g>
      </svg>
    </div>
    // <svg
    //   className={className}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 100 100"
    //   preserveAspectRatio="xMidYMid"
    //   width="200"
    //   height="200"
    //   style={{
    //     shapeRendering: "auto",
    //     display: "block",
    //     background: "transparent",
    //   }}
    // >
    //   <g>
    //     <circle
    //       strokeLinecap="round"
    //       fill="none"
    //       strokeDasharray="50.26548245743669 50.26548245743669"
    //       stroke="#a1a1aa"
    //       strokeWidth="8"
    //       r="32"
    //       cy="50"
    //       cx="50"
    //     >
    //       <animateTransform
    //         values="0 50 50;360 50 50"
    //         keyTimes="0;1"
    //         dur="1s"
    //         repeatCount="indefinite"
    //         type="rotate"
    //         attributeName="transform"
    //       ></animateTransform>
    //     </circle>
    //     <g></g>
    //   </g>
    // </svg>
  )
}

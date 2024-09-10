interface ArrowProps {
  direction?: 'left' | 'right' | 'up' | 'down'
}

export default function ArrowIcon(props: ArrowProps) {
  const { direction = 'right' } = props

  const directions = {
    right: '',
    left: 'rotate-180',
    up: 'rotate-90',
    down: '-rotate-90',
  }

  return (
    <svg
      className={`w-6 h-6 ${directions[direction]}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m9 5 7 7-7 7"
      />
    </svg>
  )
}

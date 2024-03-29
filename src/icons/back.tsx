import {TIconProps} from '../types/common';

export const Back = ({className, height = '24', width = '24'}: TIconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    clipRule="evenodd"
    fill="currentColor"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.474 5.209 3.22 11.468c-.147.146-.22.338-.22.53s.073.384.22.53l6.252 6.257a.742.742 0 0 0 .527.217.753.753 0 0 0 .534-1.278l-4.976-4.976h14.692a.75.75 0 0 0 0-1.5H5.557l4.978-4.979a.745.745 0 0 0-.006-1.054.749.749 0 0 0-1.055-.006z"
      fillRule="nonzero"
    />
  </svg>
);

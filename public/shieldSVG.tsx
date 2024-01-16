import React from 'react'

export default ({width, height}: {width: number, height: number}) => {
	return (
		<>
			<svg
				width={width}
				height={height}
				viewBox='0 0 50 58'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M20.8264 1.65108L6.85272 6.91573C3.63232 8.11988 1 11.9283 1 15.3448V36.1514C1 39.4558 3.18427 43.7964 5.8446 45.7846L17.8861 54.7737C21.8345 57.7421 28.3313 57.7421 32.2798 54.7737L44.3212 45.7846C46.9816 43.7964 49.1658 39.4558 49.1658 36.1514V15.3448C49.1658 11.9003 46.5335 8.09187 43.3131 6.88772L29.3394 1.65108C26.9591 0.782973 23.1506 0.782973 20.8264 1.65108Z'
					stroke='white'
				/>
			</svg>
		</>
	)
}
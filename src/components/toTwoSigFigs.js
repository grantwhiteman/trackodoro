const toTwoSigFigs = (number) => {
  return Math.floor(number).toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false
		})
};

export default toTwoSigFigs;

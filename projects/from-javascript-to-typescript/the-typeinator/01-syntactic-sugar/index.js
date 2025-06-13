// Put your announceMachines function here! ✨
function announceMachines(announce, ...machines) {
	let labelsCount = 0;

	for (const machine of machines) {
		const label = machines.label
			? machines.label
			: `Make: ${machine.make}; Model: ${machine.model}`;

		if (machine.label) {
			labelsCount += 1;
		}

		announce(label);
	}
	return labelsCount;
}

// See ./original.js for its older JavaScript code.

module.exports.announceMachines = announceMachines;

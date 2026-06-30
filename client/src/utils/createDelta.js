export default function createDelta(oldText, newText) {
	let start = 0;

	// Find first different character
	while (
		start < oldText.length &&
		start < newText.length &&
		oldText[start] === newText[start]
	) {
		start++;
	}

	let oldEnd = oldText.length - 1;
	let newEnd = newText.length - 1;

	// Find last different character
	while (
		oldEnd >= start &&
		newEnd >= start &&
		oldText[oldEnd] === newText[newEnd]
	) {
		oldEnd--;
		newEnd--;
	}

	return {
		position: start,
		deleteCount: oldEnd >= start ? oldEnd - start + 1 : 0,
		text: newEnd >= start ? newText.slice(start, newEnd + 1) : "",
	};
}

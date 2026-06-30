export default function applyDelta(document, delta) {
	const { position, deleteCount, text } = delta;

	return (
		document.slice(0, position) + text + document.slice(position + deleteCount)
	);
}

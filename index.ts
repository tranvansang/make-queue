export default function makeQueue(skipError = true) {
	let run: Promise<void>
	return <T>(cb: () => T) => run = (async () => {
		try {
			await run
		} catch (e) {
			if (!skipError) throw e
		}
		await cb()
	})()
}

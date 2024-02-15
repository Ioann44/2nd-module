// Замыкание
function makeLogFunction(message: string): () => void {
	return () => {
		console.log(message);
	}
}
const noDelayFunction = makeLogFunction("Something without delay");

// Асинхронная функция
async function getCurrentDate(): Promise<void> {
	setTimeout(() => {
		console.log(`Date with delay ${Date.now()}`);
	}, 10000);
}


async function onLoadFunc() {
	getCurrentDate();
	noDelayFunction();
}
window.onload = onLoadFunc;
// onLoadFunc();
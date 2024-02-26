export function sealed(constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}

export function uppered(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalFunction: (...args: any[]) => string = descriptor.value;
	descriptor.value = function (...args: any[]) {
		return originalFunction.apply(this, args).toUpperCase();
	};
}
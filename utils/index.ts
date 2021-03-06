/**
 * 数组去重
 * @param {any} arr 
 * @param {any} objectId 如果对象是Object的话，指定一个Object内的方法或属性作为唯一去重ID
 * @return {any}
 * @description 注意：不能直接用Set! 因为有Object的存在_(:з」∠)_
 */
export function unique(arr: any, objectId: any = null): any {
	let ret: any = [];
	let hash: Set<string> = new Set();

	arr.map((value: any) => {
		let item;
		if (objectId === null) {
			item = value;
		} else {
			item = value[objectId];
		}
		if (!hash.has(item)) {
			hash.add(item);
			ret.push(item);
		}
	})

	return ret;
}

/**
 * 时间格式化
 * @param {Date} date [description]
 * @return {any}
 */
export function formatDate(date: Date): string {
	return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes()
}

/**
 * 将正则表达式特殊字符去除
 * @param {string} regEx [description]
 * @return {string}
 */
export function quoteRegExp(regEx: string): string {
	return regEx.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');
}
function fullJustify(words: string[], maxWidth: number): string[] {
	const temps: { remaining: number, texts: string[] }[] = [{ remaining: maxWidth, texts: [] }];

	let remaining = maxWidth;
	let index = 0;
	for (const word of words) {
			const length = word.length;

			if (length <= remaining) {
					remaining -= (length + 1);
					temps[index].texts.push(word)
					temps[index].remaining = remaining;
			} else {
					if (temps[index].remaining || temps[index].texts.length > 1) {
							temps[index].remaining++;
					} else if (temps[index].texts.length === 1 && temps[index].texts[0].length < maxWidth) {
							temps[index].remaining++;
					}

					index++;
					remaining = maxWidth - length - 1;
					temps.push({ remaining, texts: [word] })
			}
	}

	const result: string[] = [];

	for (const { remaining, texts } of temps) {
			if (texts !== temps[temps.length - 1].texts) {
					if (texts.length === 1) {
							result.push(texts[0] + ' '.repeat(remaining))
					} else {
							const averageAdd = Math.floor(remaining / (texts.length - 1))
							let remain = remaining % (texts.length - 1);

							let s = '';
							for (let i = 0; i < texts.length; i++) {
									if (i === texts.length - 1) {
											s = s + texts[i]
									} else {
											s = s + texts[i] + ' '.repeat(1 + averageAdd + (remain > 0 ? 1 : 0))
											remain--;
									}
							}
							result.push(s)
					}
			} else {
					const s = texts.join(' ');
					result.push(s + ' '.repeat(maxWidth - s.length));
			}
	}

	return result

};
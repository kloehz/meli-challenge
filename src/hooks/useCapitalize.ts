
export const useCapitalize = (word: string) => {
    let first = word.charAt(0).toUpperCase();
    let loweredWord = word.slice(1).toLowerCase();
    return `${first}${loweredWord}`;
}
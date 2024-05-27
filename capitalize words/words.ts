function capitalizeWord(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
console.log(capitalizeWord("hi"))
console.log(capitalizeWord("Patience"))

function uncommonFromSentences(s1: string, s2: string): string[] {
  // Concatena as duas frases e separa em um array de palavras
  const words = s1.split(' ').concat(s2.split(' '));
  
  // Mapa para contar a ocorrência de cada palavra
  const wordCount: { [key: string]: number } = {};

  // Preenche o mapa com a contagem de cada palavra
  for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  // Retorna as palavras que aparecem exatamente uma vez
  return Object.keys(wordCount).filter(word => wordCount[word] === 1);
}

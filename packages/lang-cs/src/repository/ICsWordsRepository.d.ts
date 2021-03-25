export interface ICsWordsRepository {
    findWordWithSpecification(word: string): Promise<any>;
}

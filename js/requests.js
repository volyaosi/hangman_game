const getPuzzle = () => {
    return fetch(`https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=adjective%2C%20verb%2C%20adverb%2C%20interjection%2C%20pronoun%2C%20preposition%2C%20abbreviation%2C%20affix%2C%20article%2C%20auxiliary-verb%2C%20conjunction%2C%20definite-article%2C%20family-name%2C%20given-name%2C%20idiom%2C%20imperative%2C%20noun-plural%2C%20noun-posessive%2C%20past-participle%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-posessive%2C%20suffix%2C%20verb-intransitive%2C%20verb-transitive&minCorpusCount=50000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=9&api_key=k60bb1f4wr9qo73eub0twrtq0i1e0qwdw7erwaix48au7uf1f
    `).then(response => {
        if(response.status === 200){
            return response.json();
        } else {
            throw new Error('Unable to fetch the puzzle');
        }
    });
};

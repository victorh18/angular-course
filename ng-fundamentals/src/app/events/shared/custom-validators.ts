import { FormControl } from "@angular/forms"

export function restrictWords(restrictedWords: string[]) {
    return (control: FormControl) => {
        if (!restrictedWords) 
            return null;
        
        let invalidWords = restrictedWords.filter(w => control.value.includes(w));
        console.log(invalidWords);
        
        if (invalidWords?.length > 0) {
            return {
                'restrictWords': invalidWords.join(', ')
            }
        }

        return null;
        
        
    }
}
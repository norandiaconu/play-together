import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: []
})
export class AppComponent {
    title = 'play-together';
    public playTogether: string[] = [];
    public extraBoxes = 0;
    public emptyBox = ['There\'s an empty box'];

    constructor() {}

    increaseBoxes(): void {
        this.extraBoxes++;
    }

    decreaseBoxes(): void {
        this.extraBoxes--;
    }

    search(box1: string, box2: string, box3: string, box4: string): void {
        if (box1 === '' || box2 === '') {
            this.playTogether = this.emptyBox;
            return;
        }
        const list1 = this.getGames(box1);
        const list2 = this.getGames(box2);
        if (this.extraBoxes === 2) {
            if (box3 === '' || box4 === '') {
                this.playTogether = this.emptyBox;
                return;
            }
            const list3 = this.getGames(box3);
            const list4 = this.getGames(box4);
            this.playTogether = list1.filter(
                (item) => list2.includes(item) && list3.includes(item) && list4.includes(item)
            );
        } else if (this.extraBoxes === 1) {
            if (box3 === '') {
                this.playTogether = this.emptyBox;
                return;
            }
            const list3 = this.getGames(box3);
            this.playTogether = list1.filter((item) => list2.includes(item) && list3.includes(item));
        } else {
            this.playTogether = list1.filter((item) => list2.includes(item));
        }
        setTimeout(() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }, 10);
    }

    getGames(textInput: string): string[] {
        const gameRegex = /.*\nTOTAL PLAYED/g;
        const gamesMatches = textInput.match(gameRegex);
        const games: string[] = [];
        if (gamesMatches) {
            gamesMatches.forEach((gameMatch, i) => {
                games[i] = gameMatch.replace('\nTOTAL PLAYED', '');
            });
        }

        const unplayedText = textInput.replace(/.*TOTAL PLAYED/s, '');
        const unplayedRegex = /.*\nACHIEVEMENTS/g;
        const unplayedMatches = unplayedText.match(unplayedRegex);
        if (unplayedMatches) {
            unplayedMatches.forEach((unplayedMatch) => {
                games.push(unplayedMatch.replace('\nACHIEVEMENTS', ''));
            });
        }

        return games;
    }
}

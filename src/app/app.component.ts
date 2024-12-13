import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'play-together';
    public playTogether: string[] = [];

    constructor() {}

    click(box1: string, box2: string, box3: string): void {
        const list1 = this.getGames(box1);
        const list2 = this.getGames(box2);
        const list3 = this.getGames(box3);
        this.playTogether = list1.filter(
            (item) => list2.includes(item) && list3.includes(item)
        );
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

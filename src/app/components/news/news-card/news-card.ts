import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsItem } from '@utils/interfaces';

@Component({
    selector: 'app-news-card',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './news-card.html',
})
export class NewsCard {
    @Input({ required: true }) news!: NewsItem;
}

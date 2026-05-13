import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsItem } from '@utils/interfaces';
import { Text } from '@shared';

@Component({
    selector: 'app-news-card',
    standalone: true,
    imports: [CommonModule, RouterModule, Text],
    templateUrl: './news-card.html',
})
export class NewsCard {
    @Input({ required: true }) news!: NewsItem;
}

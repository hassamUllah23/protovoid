import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Section } from '@shared';
import { NewsCard } from './news-card/news-card';
import { getAllNews } from '../../data/news.data';
import { NewsItem } from '@utils/interfaces';

@Component({
    selector: 'app-news',
    standalone: true,
    imports: [CommonModule, Section, NewsCard],
    templateUrl: './news.html',
})
export class News {
    newsItems: NewsItem[] = getAllNews();
}

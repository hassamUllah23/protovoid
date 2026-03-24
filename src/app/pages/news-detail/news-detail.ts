import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NewsItem } from '@utils/interfaces';
import { getNewsById } from '../../data/news.data';
import { DottedContainer } from '@shared';

@Component({
    selector: 'app-news-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, DottedContainer],
    templateUrl: './news-detail.html',
})
export class NewsDetail implements OnInit {
    news = signal<NewsItem | undefined>(undefined);
    activeSection = signal<number>(0);
    
    constructor(private route: ActivatedRoute) {}
    
    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.news.set(getNewsById(id));
        }
    }

    scrollTo(index: number): void {
        this.activeSection.set(index);
        const element = document.getElementById(`section-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    shareOnTwitter(): void {
        const newsData = this.news();
        if (newsData) {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(newsData.heading);
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        }
    }

    shareOnLinkedIn(): void {
        const url = encodeURIComponent(window.location.href);
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
}

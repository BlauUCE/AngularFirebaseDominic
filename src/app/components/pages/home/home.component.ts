import { Component, OnInit } from '@angular/core';

import { PostService } from '../../posts/post.service';
import { PostI } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  }[] = [
    {
      id: '1',
      titlePost: 'Post One',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean at placerat arcu. Nam tempus, nibh et imperdiet pellentesque, nisl tortor viverra tellus,
      ut laoreet ligula erat non turpis. Vestibulum commodo nec nulla vitae blandit. Cras nec ultrices turpis.
      Nunc et justo urna. Praesent vitae leo et ex ornare bibendum at id libero. Vestibulum lacinia elit at sapien
      egestas efficitur. Mauris ultrices leo tellus, a laoreet quam laoreet eu. Vestibulum cursus, diam nec
      fringilla sodales, nisl ipsum euismod ipsum, ac dapibus nisi felis in felis. Pellentesque dictum nibh
      euismod, viverra purus a, molestie lectus. Etiam eu elit in metus vehicula ultrices. Donec auctor ipsum
      dolor. Phasellus et tempus libero. Integer cursus in nunc ut suscipit. Vivamus vel diam volutpat,
      interdum urna eu, viverra ex. Ut vulputate est sed arcu vestibulum aliquet.`,
      imagePost: 'https://picsum.photos/450/350'
    },
    {
      id: '2',
      titlePost: 'Post Two',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean at placerat arcu. Nam tempus, nibh et imperdiet pellentesque, nisl tortor viverra tellus,
      ut laoreet ligula erat non turpis. Vestibulum commodo nec nulla vitae blandit. Cras nec ultrices turpis.
      Nunc et justo urna. Praesent vitae leo et ex ornare bibendum at id libero. Vestibulum lacinia elit at sapien
      egestas efficitur. Mauris ultrices leo tellus, a laoreet quam laoreet eu. Vestibulum cursus, diam nec
      fringilla sodales, nisl ipsum euismod ipsum, ac dapibus nisi felis in felis. Pellentesque dictum nibh
      euismod, viverra purus a, molestie lectus. Etiam eu elit in metus vehicula ultrices. Donec auctor ipsum
      dolor. Phasellus et tempus libero. Integer cursus in nunc ut suscipit. Vivamus vel diam volutpat,
      interdum urna eu, viverra ex. Ut vulputate est sed arcu vestibulum aliquet.`,
      imagePost: 'https://picsum.photos/450/350'
    },
    {
      id: '3',
      titlePost: 'Post Three',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean at placerat arcu. Nam tempus, nibh et imperdiet pellentesque, nisl tortor viverra tellus,
      ut laoreet ligula erat non turpis. Vestibulum commodo nec nulla vitae blandit. Cras nec ultrices turpis.
      Nunc et justo urna. Praesent vitae leo et ex ornare bibendum at id libero. Vestibulum lacinia elit at sapien
      egestas efficitur. Mauris ultrices leo tellus, a laoreet quam laoreet eu. Vestibulum cursus, diam nec
      fringilla sodales, nisl ipsum euismod ipsum, ac dapibus nisi felis in felis. Pellentesque dictum nibh
      euismod, viverra purus a, molestie lectus. Etiam eu elit in metus vehicula ultrices. Donec auctor ipsum
      dolor. Phasellus et tempus libero. Integer cursus in nunc ut suscipit. Vivamus vel diam volutpat,
      interdum urna eu, viverra ex. Ut vulputate est sed arcu vestibulum aliquet.`,
      imagePost: 'https://picsum.photos/450/350'
    },
    {
      id: '4',
      titlePost: 'Post Four',
      contentPost: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean at placerat arcu. Nam tempus, nibh et imperdiet pellentesque, nisl tortor viverra tellus,
      ut laoreet ligula erat non turpis. Vestibulum commodo nec nulla vitae blandit. Cras nec ultrices turpis.
      Nunc et justo urna. Praesent vitae leo et ex ornare bibendum at id libero. Vestibulum lacinia elit at sapien
      egestas efficitur. Mauris ultrices leo tellus, a laoreet quam laoreet eu. Vestibulum cursus, diam nec
      fringilla sodales, nisl ipsum euismod ipsum, ac dapibus nisi felis in felis. Pellentesque dictum nibh
      euismod, viverra purus a, molestie lectus. Etiam eu elit in metus vehicula ultrices. Donec auctor ipsum
      dolor. Phasellus et tempus libero. Integer cursus in nunc ut suscipit. Vivamus vel diam volutpat,
      interdum urna eu, viverra ex. Ut vulputate est sed arcu vestibulum aliquet.`,
      imagePost: 'https://picsum.photos/450/350'
    }
  ]

  public posts$: Observable<PostI[]>;

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    this.postSvc.getAllPosts().subscribe ( res => {
      console.log('POST', res);
    });
  }

}

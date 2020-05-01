import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  } = {
      id: '1',
      titlePost: 'Post ',
      contentPost: 'hola mundo',
      imagePost: 'https://picsum.photos/800/600'
  };

  constructor(private route:ActivatedRoute) {
    console.log(this.route.snapshot.params.id);
    this.post.id = this.route.snapshot.params.id;
    this.post.titlePost= 'Post '+this.post.id;
  }

  ngOnInit() {
  }

}

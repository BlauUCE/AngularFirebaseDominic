import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  /* public post: {
    id: string;
    titlePost: string;
    contentPost: string;
    imagePost: string;
  } = {
      id: '1',
      titlePost: 'Post ',
      contentPost: 'hola mundo',
      imagePost: 'https://picsum.photos/300/200'
  }; */

  public post$ : Observable<PostI>;

  constructor(private route: ActivatedRoute, private postSvc: PostService) {
    /* console.log(this.route.snapshot.params.id);
    this.post.id = this.route.snapshot.params.id;
    this.post.titlePost= 'Post '+this.post.id;
 */
    const idPost = this.route.snapshot.params.id;
    this.post$ = this.postSvc.getOnePost(idPost);
  }

  ngOnInit() {
  }

}

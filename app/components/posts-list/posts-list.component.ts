import { PostsResolve } from './../../services/posts-resolve.service';
import { Router } from '@angular/router';
import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Post } from "../../models/post";

@Component({
    selector: "posts-list",
    templateUrl: "./app/components/posts-list/posts-list.component.html"
})
export class PostsListComponent {

    @Input() posts: Post[];

    constructor(private _router: Router) {}

    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~    DONE!!                                                                                       |
     |------------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección del autor de un post y navega a la  |
     | dirección correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app. |
     | La ruta a navegar es '/posts/users', pasando como parámetro el identificador del autor.                          |
     |------------------------------------------------------------------------------------------------------------------*/

     redirigeAlListadoDePostsDeUsuario(user) {
         this._router.navigate(['/posts/users', user.id]);
     }

    /*-----------------------------------------------------------------------------------------------------------------|
     | ~~~ Green Path ~~~   DONE!!!                                                                                             |
     |-----------------------------------------------------------------------------------------------------------------|
     | Maneja el evento del componente PostPreviewComponent que indica la selección de un post y navega a la dirección |
     | correspondiente. Recuerda que para hacer esto necesitas inyectar como dependencia el Router de la app.  La ruta |
     | a navegar es '/posts', pasando como parámetro el identificador del post.                                        |
     |-----------------------------------------------------------------------------------------------------------------*/

     redirigeAlPost(post) {
         this._router.navigate(['/posts', post.id]);
     }
    
    
}

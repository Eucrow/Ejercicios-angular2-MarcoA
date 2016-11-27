import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router} from "@angular/router";

import { Post } from "../../models/post";

@Component({
    templateUrl: "./app/components/post-details/post-details.component.html",
    styleUrls: ["./app/components/post-details/post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {

    post: Post;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router) { }

    ngOnInit(): void {
        this._activatedRoute.data.forEach((data: { post: Post}) => this.post = data.post);
        window.scrollTo(0, 0);
    }

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }

    /*---------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~    DONE!!                                                                                    |
     |---------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts del autor indicado. Recuerda que    |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/users', |
     | pasando como parámetro el identificador del autor.                                                            |
     |---------------------------------------------------------------------------------------------------------------*/
    
    redirigeAlListadoDePostsDeUsuario(user){
        this._router.navigate(['/posts/users', user.id]);
     }

    /*--------------------------------------------------------------------------------------------------------------------|
     | ~~~ Yellow Path ~~~  DONE!!!                                                                                       |
     |--------------------------------------------------------------------------------------------------------------------|
     | Añade un manejador que navegue a la dirección correspondiente a los posts de la categoría indicada. Recuerda que   |
     | para hacer esto necesitas inyectar como dependencia el Router de la app. La ruta a navegar es '/posts/categories', |
     | pasando como parámetro el identificador de la categoría.                                                           |
     |--------------------------------------------------------------------------------------------------------------------*/
    redirigeAlListadoDePostsDeUnaCategoria(category){
        this._router.navigate(['/posts/categories', category.id]);
     }

    /* Broke White Path*/

    @Output() editar: EventEmitter<Post> = new EventEmitter();

    redirigePost(post){
        this._router.navigate(['/posts', post.id]);
    }

}

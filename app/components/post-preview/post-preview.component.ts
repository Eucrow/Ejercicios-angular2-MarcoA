import { Component, Input, Output, EventEmitter } from "@angular/core";

import { User } from './../../models/user';
import { Post } from "../../models/post";

@Component({
    selector: "post-preview",
    templateUrl: "./app/components/post-preview/post-preview.component.html",
    styleUrls: ["./app/components/post-preview/post-preview.component.css"]
})
export class PostPreviewComponent {

    @Input() post: Post;
    @Input() user: User;
    
    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Red Path ~~~    DONE!!                                                                                       |
     |------------------------------------------------------------------------------------------------------------------|
     | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
     | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
     | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
     |------------------------------------------------------------------------------------------------------------------*/
    @Output() userSeleccionado: EventEmitter<User> = new EventEmitter;

    notificarAutorSeleccionado(user: User) {
        this.userSeleccionado.emit(user);
    }

    /*------------------------------------------------------------------------------------------------------------------|
     | ~~~ Green Path ~~~  DONE!!!                                                                                               |
     |------------------------------------------------------------------------------------------------------------------|
     | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
     | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
     | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
     |------------------------------------------------------------------------------------------------------------------*/

    @Output() postSeleccionado: EventEmitter<Post> = new EventEmitter();

    notificarPostSeleccionado(post: Post) {
        this.postSeleccionado.emit(post);
    }

    plainTextToHtml(text: string): string {
        return `<p>${text.replace(/\n/gi, "</p><p>")}</p>`;
    }
}

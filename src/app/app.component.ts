import { Component } from '@angular/core';
import {onAuthUIStateChange,AuthState,CognitoUserInterface} from "@aws-amplify/ui-components"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subastaActiva: Boolean = true;
  title = 'subasta';
  user: CognitoUserInterface | undefined

  subasta = {
    title: "",
    description: "",
    urlImage: ""
  }

}

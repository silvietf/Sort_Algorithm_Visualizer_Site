import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    NgModule
} from '@angular/core';

import {
    AppComponent
} from './app.component';

// Import your library, for example the InputComponent:
import {
    InputModule,
    ButtonModule,
    CoreModule
} from 'truly-ui'; //Import Modules

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule.forRoot({
            theme: 'default',
            language:en_US
        }),

        // Specify your library as an import
        InputModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
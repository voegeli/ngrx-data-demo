import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntityDataModule, HttpUrlGenerator } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PluralHttpUrlGenerator } from 'src/app/data/plural-http-url-generator';
import { appReducer } from 'src/app/state/app.reducer';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { entityConfig } from './entity-metadata';
import { PostComponent } from './pages/index/components/post/post.component';
import { IndexComponent } from './pages/index/index.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        PostComponent,
        EditComponent,
        CreateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        // The order of the modules is important!!
        StoreModule.forRoot({AppState: appReducer}),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot(entityConfig),
        NgbModule

    ],
    providers: [
        {provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

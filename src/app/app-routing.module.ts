import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from 'src/app/pages/create/create.component';
import { EditComponent } from 'src/app/pages/edit/edit.component';
import { IndexComponent } from 'src/app/pages/index/index.component';

const routes: Routes = [
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {path: '**', redirectTo: 'index'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

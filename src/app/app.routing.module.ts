import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
{
    path:'login',
    component: HomeComponent
},
{
    path:'home',
    component: WelcomeComponent
},
{
    path:'',
    redirectTo: 'login',
    pathMatch:'full'
},
{
    path:'**',
 component:PageNotFoundComponent
},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
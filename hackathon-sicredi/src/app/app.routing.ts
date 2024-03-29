import { Routes, RouterModule } from "@angular/router";
import { OnboardingComponent } from './onboarding/onboarding.component';
import { GeralComponent } from './escola/geral/geral.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { IndicesComponent } from './escola/indices/indices.component';
import { ComentariosComponent } from './escola/comentarios/comentarios.component';
import { ContatoComponent } from './escola/contato/contato.component';
import { EscolaComponent } from './escola/escola.component';

const routes: Routes = [
    {
        path: 'resultado',
        component: ResultadoComponent
    },
    {
        path: 'escola',
        component: EscolaComponent
    },
    {
        path: 'escola/geral',
        component: GeralComponent
    },
    {
        path: 'escola/indices',
        component: IndicesComponent
    },
    {
        path: 'escola/comentarios',
        component: ComentariosComponent
    },
    {
        path: 'escola/contato',
        component: ContatoComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
        component: OnboardingComponent
    },

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
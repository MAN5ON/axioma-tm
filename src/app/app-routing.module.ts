import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowpageComponent } from './components/pages/showpage/showpage.component';
import { EditorComponent } from './components/pages/editor/editor.component';

const routes: Routes = [
  {path:'', component: ShowpageComponent},
  {path:'editor', component: EditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

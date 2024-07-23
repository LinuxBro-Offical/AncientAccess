import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import { TicketComponent } from "./views/admin/ticket/ticket.component";
import { HeritagedetailComponent } from "./views/details/heritagedetail/heritagedetail.component";
import { EventdetailComponent } from "./views/details/eventdetail/eventdetail.component";
import { TicketdetailComponent } from "./views/details/ticketdetail/ticketdetail.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    canActivate:([AuthGuard]),
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "heritages", component: SettingsComponent },
      { path: "events", component: TablesComponent },
      { path: "users", component: MapsComponent },
      { path: "tickets", component: TicketComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent , canActivate:([AuthGuard]),},
  { path: "landing", component: LandingComponent , canActivate:([AuthGuard]),},
  { path: "heritage/:id", component: HeritagedetailComponent},
  { path: "event/:id", component: EventdetailComponent},
  {path: "ticket/view", component: TicketdetailComponent},
  { path: "**", redirectTo: "landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
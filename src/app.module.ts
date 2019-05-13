import {NgModule} from "@angular/core";
import {HelloComponent} from "./components/hello/hello.component";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    imports:[BrowserModule],
    exports:[],
    declarations:[
        HelloComponent,
        AppComponent
    ], //在angular2中所有的东西都需要在app.module进行注册
    bootstrap:[AppComponent] //项目的根组件
})
export class AppModule {

}

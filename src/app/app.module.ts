import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { DeepRecommendSharedModule } from 'src/app/general/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeepRecommendInterceptor } from './general/deeprecommend.intercepter';
import { SocketIoModule } from 'ngx-socket-io';
import { apiHostPort } from './general/utilities/api';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        DeepRecommendSharedModule,

        environment.production ? [] : AkitaNgDevtools.forRoot(),
        AkitaNgRouterStoreModule,

        SocketIoModule.forRoot({ url: apiHostPort }),

        LayoutModule,
    ],
    providers: [
        {
            provide: NG_ENTITY_SERVICE_CONFIG,
            useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
        },
        { provide: HTTP_INTERCEPTORS, useClass: DeepRecommendInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

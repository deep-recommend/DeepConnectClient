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
import { SocketService } from './general/services/socket/socket.config.service';
import { SocketEmitterService } from './general/services/socket/socket-emitter.service';
import { SocketReceiverService } from './general/services/socket/socket-receiver.service';
import { WebsocketComponent } from './websocket/websocket.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3501', options: {} };
@NgModule({
    declarations: [AppComponent, WebsocketComponent],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        DeepRecommendSharedModule,

        environment.production ? [] : AkitaNgDevtools.forRoot(),
        AkitaNgRouterStoreModule,

        SocketIoModule.forRoot(config),

        LayoutModule,
    ],
    providers: [
        {
            provide: NG_ENTITY_SERVICE_CONFIG,
            useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
        },
        { provide: HTTP_INTERCEPTORS, useClass: DeepRecommendInterceptor, multi: true },
        SocketService,
        SocketEmitterService,
        SocketReceiverService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}

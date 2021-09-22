import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { FeatureStore } from './feature.store'

@Injectable({ providedIn: 'root' })
export class FeatureService {
    constructor(private readonly featureStore: FeatureStore, private readonly http: HttpClient) {}
}

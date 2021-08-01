import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { apiFeatureUrl, httpHeaders } from 'src/app/general/utilities/api'
import { FeatureStore } from './feature.store'

@Injectable({ providedIn: 'root' })
export class FeatureService {
    private readonly _apiFeatureUrl = apiFeatureUrl
    private readonly _httpHeaders = httpHeaders

    constructor(private readonly featureStore: FeatureStore, private readonly http: HttpClient) {}
}

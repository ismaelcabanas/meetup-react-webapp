import { HttpClient } from "../../../shared/http-client";
import CreateUserRegistrationRequest from './CreateUserRegistrationRequest'
import {v4 as uuidv4} from 'uuid'

export async function create(request: CreateUserRegistrationRequest): Promise<void> {
    request.id = uuidv4()
    return HttpClient.post('/v1/user-registrations', JSON.stringify(request))
}
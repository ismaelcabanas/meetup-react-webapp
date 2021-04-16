import { HttpClient } from "../../../shared/http-client";
import CreateUserRegistrationRequest from './CreateUserRegistrationRequest'

export async function create(request: CreateUserRegistrationRequest): Promise<void> {
    return HttpClient.post('/registrations', JSON.stringify(request))
}
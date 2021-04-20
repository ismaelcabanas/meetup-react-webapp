export default class CreateUserRegistrationRequest {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;

    constructor(
        firstName: string | null,
        lastName: string | null,
        email: string | null,
        password: string | null
    ) {
        this.id = null
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
    }
}
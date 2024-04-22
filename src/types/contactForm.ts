export interface ISendEmailRequest {
    email: string;
    message: string;
    name: string;
    phone: string;
    subject: string;
}

export interface ISendEmailResponse {
    status: string;
    message: string;
}
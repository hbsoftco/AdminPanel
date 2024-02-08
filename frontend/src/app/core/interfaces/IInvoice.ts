export interface IInvoice {
    id: string;
    name: string;
    client: {
        name: string;
        avatar: string;
        username: string;
    };
    issuedDate: string;
    total: string;
    balance: string;
}
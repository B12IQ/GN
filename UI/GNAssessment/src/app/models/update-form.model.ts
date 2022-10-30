export interface UpdateFormRequest{
    name: string | undefined,
    mobile: string | undefined,
    email: string | undefined,
    country: string | undefined,
    city: string | undefined,
    birthDate: Date | undefined,
    contractStartDate: Date | undefined,
    contractEndDate: Date | undefined,
    status: Boolean | undefined,
    srlHandel: string | undefined,
}
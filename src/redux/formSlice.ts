import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Responsible = {
    responsible_name: string,
    cpf: string,
    rg: string,
    email: string,
    password: string,
    phone_number: string,
};

type Company = {
    company_name: string,
    company_email: string,
    company_phone_number: string,
    description: string,
    cnpj: string,
};

type Address = {
    street: string,
    district: string,
    zip_code: string,
    city: string,
    state: string,
    address_number: string,
    longitude: number,
    latitude: number
}

interface CreateAccount {
    responsible_data: Responsible,
    company_data: Company,
    address_data: Address
};

const initialState = {
    responsible_data: {
        responsible_name: '',
        cpf: '',
        rg: '',
        email: '',
        password: '',
        phone_number: ''
    },
    company_data: {
        company_name: '',
        company_email: '',
        company_phone_number: '',
        description: '',
        cnpj: '',
    },
    address_data: {
        street: '',
        district: '',
        zip_code: '',
        city: '',
        state: '',
        address_number: '',
        longitude: 0,
        latitude: 0
    }
    
} as CreateAccount

const authSlice = createSlice({
    name: 'form',
    initialState: initialState,
    reducers: {
        responsibleData: (state, action: PayloadAction<Responsible>) => {
            state.responsible_data = action.payload;
        },
        companyData: (state, action: PayloadAction<Company>) => {
            state.company_data = action.payload;
        },
        addressData: (state, action: PayloadAction<Address>) => {

        },
    }
});

export const { responsibleData, companyData, addressData } = authSlice.actions;

export default authSlice.reducer;
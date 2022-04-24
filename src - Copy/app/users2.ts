export interface Users2 {
    success	: boolean 
    usuarioid	: string  
    nombre		: string  
    apellido	: string  
    tipo		: string  
    email		: string  
}

export interface Users2Response {
    shows: Array<Users2>;
}

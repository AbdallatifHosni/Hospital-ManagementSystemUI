export class GetToken {
    constructor
    (
        public message:string='',
        public status:boolean=true,
        public userName:string='',
       public  email:string='',
        public roles:string[]=[],
        public token:string='',
        public expiresOn:Date=new Date(),

    ){}

}


class singletonExample{
    private static instance:singletonExample;
    private constructor(public name:string="instance1"){
    }

    static getInstance():singletonExample{
        if(singletonExample.instance){
            return this.instance;
        }
        return this.instance = new singletonExample();
    }


}

const singletonObj = singletonExample.getInstance();
console.log(singletonObj.name);
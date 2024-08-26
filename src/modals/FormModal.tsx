
export interface IButton{
    type: 'button'|'submit'|'reset'
    onClick:(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void,
    text:string;
}
export interface ITextInput{
    placeholder: string;
    type:string,
    value:string,
    name:string,
    onchange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    label:string;
}
export interface ILable{
    text:string | undefined;
}
export interface IForm{
    heading:string,
    button:IButton,
    // button2:IButton,
    textInputs:ITextInput[],
    placeholder:string
}
export interface ICard{
    title:string,
    image:string,
    fees:number,
    duration:string,
    btn:any
}
export interface ICards{
   cards:ICard[]
}

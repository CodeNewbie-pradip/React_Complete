export const DyHello = () => {
    let myName = 'Pradip';
    let fullName=()=>{
      return "Pradip Labade"
    }
    return (
      <div><h3>hello, i am speaking from the future, i am you are master</h3><h1>{fullName()}</h1> </div>
    )
}

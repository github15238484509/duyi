interface Iporps {
  num: number
  onChange?:(value: number)=>void
}
export function CountCom(porp: Iporps) {
  return (
    <div>
      <button onClick={() => {
       porp.onChange&&porp.onChange(porp.num-1)
      }}>--</button>
      <span>{porp.num}</span>
      <button onClick={() => {
        porp.onChange&&porp.onChange(porp.num+1)
      }}>++</button>
    </div>
  );
}
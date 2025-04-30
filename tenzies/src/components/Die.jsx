
export default function Die (props) {
  return (
    <div>
        <button className={props.isHeld? 'is-held':''} 
        onClick={props.clicked}
         value={props.value}
         id={props.id}
         >
            {props.value}
        </button>
    </div>
  )
}


const RenderCond = (props) => {
    

    return <div>
            {props.x > 5 && <p>x é maior que 5</p>}
            {props.x > 5 ? <p>x é um númro alto</p> : <p>x é um número baixo</p>}
        </div>
}

export default RenderCond;
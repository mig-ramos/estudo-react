const RenderCond = ({ x, y }) => {
    

    return <div>
            {x > 5 && <p>x é maior que 5</p>}
            {x > 5 ? <p>x é um númro alto</p> : <p>x é um número baixo</p>}
            <p>O valor de y é: {y}</p>
        </div>
}

export default RenderCond;